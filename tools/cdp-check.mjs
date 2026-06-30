import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const EDGE =
  process.env.EDGE_PATH ||
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const url = process.argv[2] || "http://127.0.0.1:5173/";
const outDir = process.argv[3] || path.resolve("qa-screenshots", "cdp");
const width = Number(process.env.CDP_WIDTH || 1440);
const height = Number(process.env.CDP_HEIGHT || 900);
const waitMs = Number(process.env.CDP_WAIT_MS || 12000);
const port = Number(process.env.CDP_PORT || 9333);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForDevTools() {
  const endpoint = `http://127.0.0.1:${port}/json/version`;
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Browser is still starting.
    }
    await sleep(100);
  }
  throw new Error("Timed out waiting for DevTools endpoint");
}

class Cdp {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 0;
    this.pending = new Map();
    this.events = [];
    this.ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(JSON.stringify(message.error)));
        else resolve(message.result);
      } else if (message.method) {
        this.events.push(message);
      }
    });
  }

  async open() {
    if (this.ws.readyState === WebSocket.OPEN) return;
    await new Promise((resolve, reject) => {
      this.ws.addEventListener("open", resolve, { once: true });
      this.ws.addEventListener("error", reject, { once: true });
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
    });
  }

  close() {
    this.ws.close();
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const profile = path.join(outDir, "edge-profile");
  await rm(profile, { recursive: true, force: true });
  await mkdir(profile, { recursive: true });

  let browser = null;
  let browserLog = "";
  if (process.env.CDP_ATTACH !== "1") {
    browser = spawn(
      EDGE,
      [
        "--headless=new",
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-background-networking",
        "--no-first-run",
        "--no-default-browser-check",
        "--remote-allow-origins=*",
        `--remote-debugging-port=${port}`,
        `--user-data-dir=${profile}`,
        `--window-size=${width},${height}`,
        "--force-device-scale-factor=1",
        "about:blank",
      ],
      { stdio: ["ignore", "pipe", "pipe"] }
    );
    browser.stdout?.on("data", (chunk) => {
      browserLog += chunk.toString();
    });
    browser.stderr?.on("data", (chunk) => {
      browserLog += chunk.toString();
    });
    browser.on("error", (error) => {
      browserLog += `\nspawn error: ${error.message}`;
    });
  }

  try {
    try {
      await waitForDevTools();
    } catch (error) {
      throw new Error(`${error.message}\nBrowser output:\n${browserLog}`);
    }
    const targetRes = await fetch(
      `http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`,
      { method: "PUT" }
    );
    if (!targetRes.ok) {
      throw new Error(`Cannot create target: ${targetRes.status}`);
    }
    const target = await targetRes.json();
    const cdp = new Cdp(target.webSocketDebuggerUrl);
    await cdp.open();

    const observed = {
      console: [],
      exceptions: [],
      failed: [],
      responses: [],
      pageErrors: [],
    };

    await cdp.send("Runtime.enable");
    await cdp.send("Log.enable");
    await cdp.send("Network.enable");
    await cdp.send("Page.enable");
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 700,
    });
    await cdp.send("Page.navigate", { url });

    const stopAt = Date.now() + waitMs;
    while (Date.now() < stopAt) {
      for (const event of cdp.events.splice(0)) {
        if (event.method === "Runtime.consoleAPICalled") {
          observed.console.push({
            type: event.params.type,
            args: event.params.args?.map((arg) => arg.value ?? arg.description),
          });
        }
        if (event.method === "Runtime.exceptionThrown") {
          observed.exceptions.push(event.params.exceptionDetails);
        }
        if (event.method === "Network.loadingFailed") {
          observed.failed.push(event.params);
        }
        if (event.method === "Network.responseReceived") {
          const { response } = event.params;
          if (response.status >= 400) {
            observed.responses.push({
              status: response.status,
              url: response.url,
              mimeType: response.mimeType,
            });
          }
        }
        if (event.method === "Log.entryAdded") {
          observed.pageErrors.push(event.params.entry);
        }
      }
      await sleep(100);
    }

    const evalResult = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => ({
        title: document.title,
        bodyClass: document.body.className,
        htmlClass: document.documentElement.className,
        bodyText: document.body.innerText,
        nextChildCount: document.querySelector('#__next')?.childElementCount,
        nextHtmlStart: document.querySelector('#__next')?.innerHTML.slice(0, 1000),
        splash: !!document.querySelector('.splashscreen'),
        splashText: document.querySelector('.splashscreen')?.innerText,
        location: location.href,
        scripts: [...document.scripts].map(s => s.src || s.id).filter(Boolean)
      }))`,
    });

    const screenshot = await cdp.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
    });
    const safeName =
      url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "-") || "page";
    const pngPath = path.join(outDir, `${safeName}-${width}x${height}.png`);
    const jsonPath = path.join(outDir, `${safeName}-${width}x${height}.json`);
    await writeFile(pngPath, Buffer.from(screenshot.data, "base64"));
    await writeFile(
      jsonPath,
      JSON.stringify({ url, width, height, waitMs, observed, dom: evalResult.result.value }, null, 2),
      "utf8"
    );

    cdp.close();
    console.log(JSON.stringify({ pngPath, jsonPath }, null, 2));
  } finally {
    browser?.kill();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
