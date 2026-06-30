import { execFileSync } from "node:child_process";
import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const basePath = normalizeBasePath(process.argv[2] || "");
const distDir = "dist";
const textExtensions = new Set([
  ".html",
  ".css",
  ".js",
  ".json",
  ".webmanifest",
  ".svg",
  ".txt",
  ".xml",
]);

rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });

const trackedFiles = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean)
  .filter((file) => !file.startsWith(".github/"));

for (const file of trackedFiles) {
  const target = join(distDir, file);
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(file, target);

  if (textExtensions.has(extensionOf(file))) {
    const original = readFileSync(target, "utf8");
    const rewritten = prefixRootPaths(original, basePath);
    if (rewritten !== original) {
      writeFileSync(target, rewritten, "utf8");
    }
  }
}

function normalizeBasePath(value) {
  if (!value || value === "/") {
    return "";
  }

  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}

function extensionOf(file) {
  const match = file.match(/(\.[^.\/\\]+)$/);
  return match ? match[1].toLowerCase() : "";
}

function prefixRootPaths(text, base) {
  if (!base) {
    return text;
  }

  let output = text;

  output = output.replace(
    /\b(href|src|poster|content|action)=("|')\/(?!\/|#|personal-name\/)([^"']*)\2/g,
    (_match, attr, quote, path) => `${attr}=${quote}${base}/${path}${quote}`,
  );

  output = output.replace(
    /\b(srcset|imagesrcset)=("|')([^"']*)\2/gi,
    (_match, attr, quote, value) => {
      const rewritten = value
        .split(",")
        .map((entry) => {
          const trimmed = entry.trimStart();
          return trimmed.startsWith("/") && !trimmed.startsWith(`${base}/`)
            ? entry.replace("/", `${base}/`)
            : entry;
        })
        .join(",");
      return `${attr}=${quote}${rewritten}${quote}`;
    },
  );

  output = output.replace(
    /url\((["']?)\/(?!\/|#|personal-name\/)([^)"']+)(["']?)\)/g,
    (_match, openQuote, path, closeQuote) => `url(${openQuote}${base}/${path}${closeQuote})`,
  );

  const knownRootPath =
    /(["'])\/(?!\/|#|personal-name\/)((?:_next|external-assets|fonts|work|about|contact|fr|life-space-assets|noise\.png|wave(?:-light)?\.svg|favicon\.ico|android-chrome-[^"'?#\s]+|apple-touch-icon\.png|manifest\.webmanifest|lingzhi-space\.(?:html|css|js)|shape-(?:arranger|inventory)\.(?:html|css|js)|shiftingsU(?:-original)?\.glb|personal-content\.(?:css|js))[^"']*)\1/g;

  output = output.replace(knownRootPath, (_match, quote, path) => {
    return `${quote}${base}/${path}${quote}`;
  });

  return output;
}
