const { mkdir, writeFile } = require("node:fs/promises");
const path = require("node:path");
const { chromium } = require("playwright");

const EDGE =
  process.env.EDGE_PATH ||
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

const urls = process.argv.slice(2);
const pages = urls.length ? urls : ["http://127.0.0.1:5173/"];
const outDir = path.resolve(process.env.PW_OUT_DIR || "qa-screenshots/playwright");
const width = Number(process.env.PW_WIDTH || 1440);
const height = Number(process.env.PW_HEIGHT || 900);
const waitMs = Number(process.env.PW_WAIT_MS || 14000);
const scrollY = Number(process.env.PW_SCROLL_Y || 0);

const safeName = (url) =>
  url.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "") ||
  "page";

(async () => {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({
    executablePath: EDGE,
    headless: true,
    args: ["--disable-gpu", "--no-first-run", "--no-default-browser-check"],
  });

  const results = [];
  try {
    for (const url of pages) {
      const context = await browser.newContext({
        viewport: { width, height },
        deviceScaleFactor: 1,
      });
      const page = await context.newPage();
      const observed = { console: [], pageErrors: [], failed: [] };

      page.on("console", (message) => {
        observed.console.push({
          type: message.type(),
          text: message.text(),
        });
      });
      page.on("pageerror", (error) => {
        observed.pageErrors.push(error.message);
      });
      page.on("requestfailed", (request) => {
        observed.failed.push({
          url: request.url(),
          failure: request.failure()?.errorText,
        });
      });

      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForTimeout(waitMs);
      if (scrollY) {
        await page.evaluate((value) => window.scrollTo(0, value), scrollY);
        await page.waitForTimeout(800);
      }

      let menuOpenText = "";
      const menuButton = page.locator(".hamburger-btn").first();
      if (process.env.PW_TEST_MENU === "1" && (await menuButton.count())) {
        await menuButton.click({ timeout: 3000 }).catch(() => {});
        await page.waitForTimeout(800);
        menuOpenText = await page.locator(".menu").first().innerText().catch(() => "");
      }

      const dom = await page.evaluate(() => ({
        title: document.title,
        bodyClass: document.body.className,
        bodyText: document.body.innerText,
        links: [...document.querySelectorAll("a")].map((anchor) => ({
          text: anchor.innerText,
          href: anchor.href,
        })),
        projectTitles: [...document.querySelectorAll(".projects-title")].map((node) =>
          node.textContent.trim()
        ),
        presentation: document.querySelector(".presentation-text")?.textContent.trim(),
        summary: document.querySelector(".project-personal-summary")?.textContent.trim(),
        menuOpenText: window.__menuOpenText || "",
      }));
      dom.menuOpenText = menuOpenText;

      const base = `${safeName(url)}-${width}x${height}`;
      const pngPath = path.join(outDir, `${base}.png`);
      const jsonPath = path.join(outDir, `${base}.json`);
      await page.screenshot({ path: pngPath, fullPage: false });
      await writeFile(
        jsonPath,
        JSON.stringify({ url, width, height, waitMs, observed, dom }, null, 2),
        "utf8"
      );
      results.push({ url, pngPath, jsonPath, errors: observed.pageErrors.length });
      await context.close();
    }
  } finally {
    await browser.close();
  }
  console.log(JSON.stringify(results, null, 2));
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
