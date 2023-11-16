const n = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  n + "/internal/immutable/entry/app.fad86364.js",
  n + "/internal/immutable/assets/0.00ad9ab4.css",
  n + "/internal/immutable/nodes/0.5453729a.js",
  n + "/internal/immutable/nodes/1.9b847bd7.js",
  n + "/internal/immutable/nodes/10.6d086995.js",
  n + "/internal/immutable/nodes/11.fa925b01.js",
  n + "/internal/immutable/nodes/12.0a35754e.js",
  n + "/internal/immutable/nodes/2.4fc6db23.js",
  n + "/internal/immutable/nodes/3.4def5680.js",
  n + "/internal/immutable/nodes/4.ebf2fd28.js",
  n + "/internal/immutable/nodes/5.da5d2269.js",
  n + "/internal/immutable/nodes/6.ad010fd0.js",
  n + "/internal/immutable/nodes/7.884e375c.js",
  n + "/internal/immutable/nodes/8.7a51f438.js",
  n + "/internal/immutable/nodes/9.fd76e9d7.js",
  n + "/internal/immutable/chunks/Dropdown.fc895c8c.js",
  n + "/internal/immutable/chunks/Icon.9bc2a10a.js",
  n + "/internal/immutable/chunks/Spinner.55af249c.js",
  n + "/internal/immutable/chunks/control.f5b05b5f.js",
  n + "/internal/immutable/chunks/each.4aed8223.js",
  n + "/internal/immutable/chunks/errors.7cec09bb.js",
  n + "/internal/immutable/chunks/index.1e570738.js",
  n + "/internal/immutable/chunks/index.35df97eb.js",
  n + "/internal/immutable/chunks/index.aac00523.js",
  n + "/internal/immutable/chunks/index.d7eb2526.js",
  n + "/internal/immutable/chunks/layout.c0462925.js",
  n + "/internal/immutable/chunks/navigation.40667790.js",
  n + "/internal/immutable/chunks/notifications.48332ed3.js",
  n + "/internal/immutable/chunks/paths.b340fad0.js",
  n + "/internal/immutable/chunks/pencil.2c400838.js",
  n + "/internal/immutable/chunks/scheduler.1587348c.js",
  n + "/internal/immutable/chunks/singletons.1d58cdb6.js",
  n + "/internal/immutable/chunks/stores.5d519baf.js",
  n + "/internal/immutable/chunks/system.db9bdf7a.js",
  n + "/internal/immutable/chunks/user.5c70c963.js",
  n + "/internal/immutable/entry/start.455b7904.js"
], r = [
  n + "/favicon.png",
  n + "/icon.png",
  n + "/icon256x256.png",
  n + "/manifest.json",
  n + "/robots.txt"
], o = "1700135869652", l = self, c = `cache-${o}`, m = [...u, ...r];
l.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(c)).addAll(m);
  }
  e.waitUntil(t());
});
l.addEventListener("activate", (e) => {
  async function t() {
    for (const a of await caches.keys())
      a !== c && await caches.delete(a);
  }
  e.waitUntil(t());
});
l.addEventListener("fetch", (e) => {
  if (e.request.method === "GET") {
    async function t() {
      const a = new URL(e.request.url), s = await caches.open(c);
      if (m.includes(a.pathname))
        return s.match(a.pathname);
      try {
        const i = await fetch(e.request);
        return i.status === 200 && s.put(e.request, i.clone()), i;
      } catch {
        return s.match(e.request);
      }
    }
    e.respondWith(t());
  }
});
