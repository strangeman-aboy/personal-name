import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const url = process.argv[2] || "http://127.0.0.1:5173/work/act-responsable/";
const outDir = process.argv[3] || path.resolve("qa-screenshots", "scroll");
const port = Number(process.env.CDP_PORT || 9333);
const width = Number(process.env.CDP_WIDTH || 1440);
const height = Number(process.env.CDP_HEIGHT || 900);
const steps = Number(process.env.CDP_SCROLL_STEPS || 6);

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
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
  close() {
    this.ws.close();
  }
}

async function target() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(
        `http://127.0.0.1:${port}/json/new?${encodeURIComponent("about:blank")}`,
        { method: "PUT" }
      );
      if (res.ok) return await res.json();
    } catch {}
    await sleep(100);
  }
  throw new Error("Timed out waiting for DevTools");
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const tab = await target();
  const cdp = new Cdp(tab.webSocketDebuggerUrl);
  await cdp.open();

  const observed = { responses: [], failed: [], console: [], exceptions: [], states: [] };
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
      if (event.method === "Network.responseReceived") {
        const { response } = event.params;
        if (response.status >= 400) {
          observed.responses.push({ status: response.status, url: response.url, mimeType: response.mimeType });
        }
      }
      if (event.method === "Network.loadingFailed") observed.failed.push(event.params);
      if (event.method === "Runtime.consoleAPICalled") {
        observed.console.push({
          type: event.params.type,
          args: event.params.args?.map((arg) => arg.value ?? arg.description),
        });
      }
      if (event.method === "Runtime.exceptionThrown") observed.exceptions.push(event.params.exceptionDetails);
    }
  }

  async function wait(ms) {
    const stopAt = Date.now() + ms;
    while (Date.now() < stopAt) {
      drain();
      await sleep(100);
    }
    drain();
  }

  async function capture(name) {
    const state = await cdp.send("Runtime.evaluate", {
      returnByValue: true,
      expression: `JSON.stringify({
        name: ${JSON.stringify(name)},
        url: location.href,
        scrollY: window.scrollY,
        docHeight: document.documentElement.scrollHeight,
        bodyText: document.body.innerText.slice(0, 800),
        images: [...document.images].map(img => ({src: img.currentSrc || img.src, complete: img.complete, w: img.naturalWidth, h: img.naturalHeight})).slice(0, 60),
        videos: [...document.querySelectorAll('video')].map(v => ({src: v.currentSrc || v.src, readyState: v.readyState, poster: v.poster})).slice(0, 20)
      })`,
    });
    observed.states.push(JSON.parse(state.result.value));
    const shot = await cdp.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    await writeFile(path.join(outDir, `${name}-${width}x${height}.png`), Buffer.from(shot.data, "base64"));
  }

  await cdp.send("Page.navigate", { url });
  await wait(12000);
  await capture("00-top");
  for (let i = 1; i <= steps; i += 1) {
    await cdp.send("Input.dispatchMouseEvent", {
      type: "mouseWheel",
      x: Math.round(width / 2),
      y: Math.round(height / 2),
      deltaY: Math.round(height * 0.75),
      deltaX: 0,
    });
    await wait(1800);
    await capture(String(i).padStart(2, "0"));
  }
  await writeFile(path.join(outDir, "scroll.json"), JSON.stringify(observed, null, 2), "utf8");
  cdp.close();
  console.log(JSON.stringify({ outDir }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
