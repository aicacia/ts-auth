const n = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  n + "/internal/immutable/entry/app.a2f04d6d.js",
  n + "/internal/immutable/assets/0.6c1aa40d.css",
  n + "/internal/immutable/nodes/0.9c37bc6b.js",
  n + "/internal/immutable/nodes/1.e7e3a372.js",
  n + "/internal/immutable/nodes/10.512050b9.js",
  n + "/internal/immutable/nodes/11.c435565d.js",
  n + "/internal/immutable/nodes/2.c40c09f5.js",
  n + "/internal/immutable/nodes/3.ac2c7629.js",
  n + "/internal/immutable/nodes/4.ea42b9c1.js",
  n + "/internal/immutable/nodes/5.310142f5.js",
  n + "/internal/immutable/nodes/6.bb80c82a.js",
  n + "/internal/immutable/nodes/7.eb8b445b.js",
  n + "/internal/immutable/nodes/8.c2b35818.js",
  n + "/internal/immutable/nodes/9.ad00b152.js",
  n + "/internal/immutable/chunks/Dropdown.fc895c8c.js",
  n + "/internal/immutable/chunks/Icon.9bc2a10a.js",
  n + "/internal/immutable/chunks/Spinner.55af249c.js",
  n + "/internal/immutable/chunks/control.f5b05b5f.js",
  n + "/internal/immutable/chunks/each.4aed8223.js",
  n + "/internal/immutable/chunks/errors.491dcf1d.js",
  n + "/internal/immutable/chunks/index.1e570738.js",
  n + "/internal/immutable/chunks/index.35df97eb.js",
  n + "/internal/immutable/chunks/index.480a3f55.js",
  n + "/internal/immutable/chunks/index.d7eb2526.js",
  n + "/internal/immutable/chunks/layout.c0462925.js",
  n + "/internal/immutable/chunks/navigation.d1fa10ea.js",
  n + "/internal/immutable/chunks/notifications.f5ca8515.js",
  n + "/internal/immutable/chunks/paths.9fe61c8a.js",
  n + "/internal/immutable/chunks/pencil.2c400838.js",
  n + "/internal/immutable/chunks/plus.12aad0c5.js",
  n + "/internal/immutable/chunks/scheduler.1587348c.js",
  n + "/internal/immutable/chunks/singletons.85c29926.js",
  n + "/internal/immutable/chunks/stores.84da441d.js",
  n + "/internal/immutable/chunks/system.fbc34745.js",
  n + "/internal/immutable/chunks/user.5abd493f.js",
  n + "/internal/immutable/entry/start.20992088.js"
], r = [
  n + "/favicon.png",
  n + "/icon.png",
  n + "/icon256x256.png",
  n + "/manifest.json",
  n + "/robots.txt"
], o = "1700309722987", c = self, l = `cache-${o}`, m = [...u, ...r];
c.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(l)).addAll(m);
  }
  e.waitUntil(t());
});
c.addEventListener("activate", (e) => {
  async function t() {
    for (const a of await caches.keys())
      a !== l && await caches.delete(a);
  }
  e.waitUntil(t());
});
c.addEventListener("fetch", (e) => {
  if (e.request.method === "GET") {
    async function t() {
      const a = new URL(e.request.url), s = await caches.open(l);
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
