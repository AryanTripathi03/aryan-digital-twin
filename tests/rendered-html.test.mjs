import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the complete Aryan Digital Twin portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Aryan Tripathi/);
  assert.match(html, /Building intelligent systems/);
  assert.match(html, /System Worlds/i);
  assert.match(html, /Digital Twin/i);
  assert.match(html, /Berry Excel Merger/);
  assert.match(html, /Travel Billing Suite/);
  assert.match(html, /aryantripathi03\.github\.io\/Berry-Excel-Merger/);
  assert.match(html, /aryantripathi03\.github\.io\/Workbook-Converter/);
  assert.match(html, /aryantripathi\.9910@gmail\.com/);
  assert.match(html, /aria-label="Primary navigation"/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("publishes robots and sitemap metadata", async () => {
  const [robots, sitemap] = await Promise.all([
    render("/robots.txt"),
    render("/sitemap.xml"),
  ]);
  assert.equal(robots.status, 200);
  assert.equal(sitemap.status, 200);
});
