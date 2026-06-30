import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const startUrl = process.argv[2] || "http://127.0.0.1:5173/";
const outDir = process.argv[3] || path.resolve("qa-screenshots", "flow");
const port = Number(process.env.CDP_PORT || 9333);
const width = Number(process.env.CDP_WIDTH || 1440);
const height = Number(process.env.CDP_HEIGHT || 900);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

async function createTarget() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(
        `http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`,
        { method: "PUT" }
      );
      if (res.ok) return await res.json();
    } catch {
      // Browser is still starting.
    }
    await sleep(100);
  }
  throw new Error("Timed out waiting for DevTools");
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const target = await createTarget();
  const cdp = new Cdp(target.webSocketDebuggerUrl);
  await cdp.open();

  const observed = { console: [], exceptions: [], responses: [], failed: [], states: [] };
  await cdp.send("Runtime.enable");
  await cdp.send("Network.enable");
  await cdp.send("Page.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 700,
  });

  function drain() {
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
      if (event.method === "Network.loadingFailed") observed.failed.push(event.params);
    }
  }

  async function waitAndDrain(ms) {
    const stopAt = Date.now() + ms;
    while (Date.now() < stopAt) {
      drain();
      await sleep(100);
    }
    drain();
  }

  async function state(name) {
    const result = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `JSON.stringify({
        name: ${JSON.stringify(name)},
        url: location.href,
        title: document.title,
        bodyText: document.body.innerText.slice(0, 1000),
        splash: !!document.querySelector('.splashscreen'),
        visibleLinks: [...document.querySelectorAll('a')].map(a => ({ text: a.innerText, href: a.getAttribute('href') })).slice(0, 30)
      })`,
    });
    observed.states.push(JSON.parse(result.result.value));
    const screenshot = await cdp.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
    });
    await writeFile(
      path.join(outDir, `${name}-${width}x${height}.png`),
      Buffer.from(screenshot.data, "base64")
    );
  }

  async function click(selector, name) {
    const result = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const el = document.querySelector(${JSON.stringify(selector)});
        if (!el) return { clicked: false, selector: ${JSON.stringify(selector)} };
        el.click();
        return { clicked: true, href: el.getAttribute('href'), text: el.innerText };
      })()`,
    });
    observed.states.push({ name, click: result.result.value });
  }

  await cdp.send("Page.navigate", { url: startUrl });
  await waitAndDrain(14000);
  await state("01-home");
  await click('a[href="/work"], a[href="/work/"]', "click-work");
  await waitAndDrain(9000);
  await state("02-after-work-click");
  await click('a[href="/work/act-responsable"], a[href="/work/act-responsable/"]', "click-project");
  await waitAndDrain(9000);
  await state("03-after-project-click");

  await writeFile(path.join(outDir, "flow.json"), JSON.stringify(observed, null, 2), "utf8");
  cdp.close();
  console.log(JSON.stringify({ outDir }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
