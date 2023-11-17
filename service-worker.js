const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  e + "/internal/immutable/entry/app.5310c4ae.js",
  e + "/internal/immutable/assets/0.00ad9ab4.css",
  e + "/internal/immutable/nodes/0.669d5682.js",
  e + "/internal/immutable/nodes/1.536e53a4.js",
  e + "/internal/immutable/nodes/10.75455157.js",
  e + "/internal/immutable/nodes/11.289711ff.js",
  e + "/internal/immutable/nodes/12.4db23713.js",
  e + "/internal/immutable/nodes/2.d0c45c97.js",
  e + "/internal/immutable/nodes/3.c3fe6722.js",
  e + "/internal/immutable/nodes/4.658df9d9.js",
  e + "/internal/immutable/nodes/5.3afd32d9.js",
  e + "/internal/immutable/nodes/6.bc988f35.js",
  e + "/internal/immutable/nodes/7.d4c8ea1e.js",
  e + "/internal/immutable/nodes/8.7a51f438.js",
  e + "/internal/immutable/nodes/9.e006ec0b.js",
  e + "/internal/immutable/chunks/Dropdown.fc895c8c.js",
  e + "/internal/immutable/chunks/Icon.9bc2a10a.js",
  e + "/internal/immutable/chunks/Spinner.55af249c.js",
  e + "/internal/immutable/chunks/control.f5b05b5f.js",
  e + "/internal/immutable/chunks/each.4aed8223.js",
  e + "/internal/immutable/chunks/errors.03ebde5d.js",
  e + "/internal/immutable/chunks/index.1e570738.js",
  e + "/internal/immutable/chunks/index.35df97eb.js",
  e + "/internal/immutable/chunks/index.53183eaa.js",
  e + "/internal/immutable/chunks/index.d7eb2526.js",
  e + "/internal/immutable/chunks/layout.c0462925.js",
  e + "/internal/immutable/chunks/navigation.e465e3a0.js",
  e + "/internal/immutable/chunks/notifications.04db5f83.js",
  e + "/internal/immutable/chunks/paths.4509113d.js",
  e + "/internal/immutable/chunks/pencil.2c400838.js",
  e + "/internal/immutable/chunks/plus.12aad0c5.js",
  e + "/internal/immutable/chunks/scheduler.1587348c.js",
  e + "/internal/immutable/chunks/singletons.56b1b6c0.js",
  e + "/internal/immutable/chunks/stores.04968c9f.js",
  e + "/internal/immutable/chunks/system.9e2f4597.js",
  e + "/internal/immutable/chunks/user.0f4cc772.js",
  e + "/internal/immutable/entry/start.d6a516e7.js"
], r = [
  e + "/favicon.png",
  e + "/icon.png",
  e + "/icon256x256.png",
  e + "/manifest.json",
  e + "/robots.txt"
], o = "1700226011491", l = self, c = `cache-${o}`, m = [...u, ...r];
l.addEventListener("install", (n) => {
  async function t() {
    await (await caches.open(c)).addAll(m);
  }
  n.waitUntil(t());
});
l.addEventListener("activate", (n) => {
  async function t() {
    for (const a of await caches.keys())
      a !== c && await caches.delete(a);
  }
  n.waitUntil(t());
});
l.addEventListener("fetch", (n) => {
  if (n.request.method === "GET") {
    async function t() {
      const a = new URL(n.request.url), s = await caches.open(c);
      if (m.includes(a.pathname))
        return s.match(a.pathname);
      try {
        const i = await fetch(n.request);
        return i.status === 200 && s.put(n.request, i.clone()), i;
      } catch {
        return s.match(n.request);
      }
    }
    n.respondWith(t());
  }
});
