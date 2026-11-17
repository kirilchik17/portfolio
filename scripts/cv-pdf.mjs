// Prints /cv from the production build to public/cv.pdf with headless Chrome or Edge.
// Run through `npm run cv`, which builds first so the PDF matches the current content.
import { spawn, spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rename, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:net";
import { tmpdir } from "node:os";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const output = path.join(root, "public", "cv.pdf");

const browserCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];

function findBrowser() {
  const found = browserCandidates.find((candidate) => candidate && existsSync(candidate));
  if (!found) throw new Error("No Chrome or Edge found. Set CHROME_PATH to a Chromium-based browser.");
  return found;
}

function freePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

function kill(child) {
  if (!child || child.exitCode !== null) return;
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/pid", String(child.pid), "/t", "/f"], { stdio: "ignore" });
  } else {
    child.kill("SIGTERM");
  }
}

async function waitForOk(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`${url} did not respond within ${timeoutMs} ms.`);
}

function devtoolsUrl(browser) {
  return new Promise((resolve, reject) => {
    let log = "";
    browser.stderr.on("data", (chunk) => {
      log += chunk;
      const match = log.match(/DevTools listening on (ws:\/\/\S+)/);
      if (match) resolve(match[1]);
    });
    browser.on("exit", (code) => reject(new Error(`Browser exited with ${code} before DevTools was ready:\n${log}`)));
  });
}

async function connect(wsUrl) {
  const socket = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = () => reject(new Error(`Could not connect to ${wsUrl}.`));
  });
  let nextId = 0;
  const pending = new Map();
  const listeners = new Set();
  socket.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    const request = pending.get(message.id);
    if (request) {
      pending.delete(message.id);
      if (message.error) request.reject(new Error(`${request.method}: ${message.error.message}`));
      else request.resolve(message.result);
    } else {
      for (const listener of listeners) listener(message);
    }
  };
  return {
    send(method, params = {}, sessionId) {
      const id = ++nextId;
      socket.send(JSON.stringify({ id, method, params, sessionId }));
      return new Promise((resolve, reject) => pending.set(id, { method, resolve, reject }));
    },
    once(method) {
      return new Promise((resolve) => {
        const listener = (message) => {
          if (message.method !== method) return;
          listeners.delete(listener);
          resolve(message.params);
        };
        listeners.add(listener);
      });
    },
    close: () => socket.close(),
  };
}

// Chrome stamps the print time into the PDF. Pinning it keeps reruns byte-identical
// when the content has not changed, so git only sees real CV changes.
function pinDates(pdf) {
  return Buffer.from(pdf.toString("latin1").replace(/\(D:\d{14}/g, "(D:20000101000000"), "latin1");
}

async function printCv(baseUrl, browserPath) {
  const profile = await mkdtemp(path.join(tmpdir(), "cv-pdf-"));
  const browser = spawn(
    browserPath,
    ["--headless=new", "--disable-gpu", "--no-first-run", "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank"],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
  let cdp;
  try {
    cdp = await connect(await devtoolsUrl(browser));
    const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
    const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
    await cdp.send("Page.enable", {}, sessionId);
    const loaded = cdp.once("Page.loadEventFired");
    await cdp.send("Page.navigate", { url: `${baseUrl}/cv` }, sessionId);
    await loaded;
    const { result } = await cdp.send(
      "Runtime.evaluate",
      { expression: "document.fonts.ready.then(() => document.fonts.status)", awaitPromise: true },
      sessionId,
    );
    if (result.value !== "loaded") throw new Error(`Fonts did not finish loading (${result.value}).`);
    const { data } = await cdp.send(
      "Page.printToPDF",
      { preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false },
      sessionId,
    );
    return pinDates(Buffer.from(data, "base64"));
  } finally {
    cdp?.close();
    kill(browser);
    await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
}

const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
if (!existsSync(path.join(root, ".next", "BUILD_ID"))) {
  throw new Error("No production build found. Run `npm run cv`, which builds first.");
}

const browserPath = findBrowser();
const port = await freePort();
const server = spawn(process.execPath, [nextBin, "start", "-p", String(port), "-H", "127.0.0.1"], {
  cwd: root,
  stdio: ["ignore", "ignore", "inherit"],
});
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    kill(server);
    process.exit(1);
  });
}

try {
  const baseUrl = `http://127.0.0.1:${port}`;
  await waitForOk(`${baseUrl}/cv`, 30_000);
  const pdf = await printCv(baseUrl, browserPath);
  const pages = pdf.toString("latin1").match(/\/Type\s*\/Page\b/g)?.length ?? 0;
  const staging = `${output}.tmp`;
  await writeFile(staging, pdf);
  await rename(staging, output);
  console.log(`Wrote ${path.relative(root, output)} (${pages} page${pages === 1 ? "" : "s"}) with ${path.basename(browserPath)}.`);
  if (pages > 2) console.warn("The CV runs past two pages. Trim content or tighten app/cv/page.tsx.");
} finally {
  kill(server);
}
