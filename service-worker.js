const n = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  n + "/internal/immutable/entry/app.c406c489.js",
  n + "/internal/immutable/assets/0.00ad9ab4.css",
  n + "/internal/immutable/nodes/0.725f681f.js",
  n + "/internal/immutable/nodes/1.ac2779b8.js",
  n + "/internal/immutable/nodes/10.117e550d.js",
  n + "/internal/immutable/nodes/11.446d836b.js",
  n + "/internal/immutable/nodes/2.3fb2d588.js",
  n + "/internal/immutable/nodes/3.40524fd0.js",
  n + "/internal/immutable/nodes/4.265e15b1.js",
  n + "/internal/immutable/nodes/5.da5d2269.js",
  n + "/internal/immutable/nodes/6.884e375c.js",
  n + "/internal/immutable/nodes/7.7a51f438.js",
  n + "/internal/immutable/nodes/8.fd76e9d7.js",
  n + "/internal/immutable/nodes/9.4516a20b.js",
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
  n + "/internal/immutable/chunks/navigation.2416c48b.js",
  n + "/internal/immutable/chunks/notifications.48332ed3.js",
  n + "/internal/immutable/chunks/paths.3e620563.js",
  n + "/internal/immutable/chunks/pencil.2c400838.js",
  n + "/internal/immutable/chunks/scheduler.1587348c.js",
  n + "/internal/immutable/chunks/singletons.efcbd8bf.js",
  n + "/internal/immutable/chunks/stores.93de8d05.js",
  n + "/internal/immutable/chunks/system.db9bdf7a.js",
  n + "/internal/immutable/chunks/user.5c70c963.js",
  n + "/internal/immutable/entry/start.6254e58d.js"
], r = [
  n + "/favicon.png",
  n + "/icon.png",
  n + "/icon256x256.png",
  n + "/manifest.json",
  n + "/robots.txt"
], o = "1700139850473", c = self, l = `cache-${o}`, m = [...u, ...r];
c.addEventListener("install", (e) => {
  async function a() {
    await (await caches.open(l)).addAll(m);
  }
  e.waitUntil(a());
});
c.addEventListener("activate", (e) => {
  async function a() {
    for (const t of await caches.keys())
      t !== l && await caches.delete(t);
  }
  e.waitUntil(a());
});
c.addEventListener("fetch", (e) => {
  if (e.request.method === "GET") {
    async function a() {
      const t = new URL(e.request.url), s = await caches.open(l);
      if (m.includes(t.pathname))
        return s.match(t.pathname);
      try {
        const i = await fetch(e.request);
        return i.status === 200 && s.put(e.request, i.clone()), i;
      } catch {
        return s.match(e.request);
      }
    }
    e.respondWith(a());
  }
});
