const n = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  n + "/internal/immutable/entry/app.cd2d4019.js",
  n + "/internal/immutable/assets/0.23026998.css",
  n + "/internal/immutable/nodes/0.52d0c6d7.js",
  n + "/internal/immutable/nodes/1.a42b4ab6.js",
  n + "/internal/immutable/nodes/10.67cd51c3.js",
  n + "/internal/immutable/nodes/11.652e3630.js",
  n + "/internal/immutable/nodes/2.c8c6209d.js",
  n + "/internal/immutable/nodes/3.a0deb7e2.js",
  n + "/internal/immutable/nodes/4.75235493.js",
  n + "/internal/immutable/nodes/5.667a44d3.js",
  n + "/internal/immutable/nodes/6.b3354d0e.js",
  n + "/internal/immutable/nodes/7.8fdd4359.js",
  n + "/internal/immutable/nodes/8.0bf5a19c.js",
  n + "/internal/immutable/nodes/9.a2b8383a.js",
  n + "/internal/immutable/chunks/ApplicationEditor.5daa82e5.js",
  n + "/internal/immutable/chunks/Dropdown.586d11c2.js",
  n + "/internal/immutable/chunks/Icon.1c7886f7.js",
  n + "/internal/immutable/chunks/Modal.73a80218.js",
  n + "/internal/immutable/chunks/Spinner.d43ed761.js",
  n + "/internal/immutable/chunks/clickoutside.1c3dfa27.js",
  n + "/internal/immutable/chunks/control.f5b05b5f.js",
  n + "/internal/immutable/chunks/each.a7fc62a0.js",
  n + "/internal/immutable/chunks/errors.e44f2348.js",
  n + "/internal/immutable/chunks/index.6dc2cd99.js",
  n + "/internal/immutable/chunks/index.734baa98.js",
  n + "/internal/immutable/chunks/index.d7eb2526.js",
  n + "/internal/immutable/chunks/layout.b8530220.js",
  n + "/internal/immutable/chunks/navigation.5c63806d.js",
  n + "/internal/immutable/chunks/notifications.4d71840f.js",
  n + "/internal/immutable/chunks/paths.41c4970f.js",
  n + "/internal/immutable/chunks/pencil.4fdcd005.js",
  n + "/internal/immutable/chunks/plus.906b1819.js",
  n + "/internal/immutable/chunks/scheduler.0fc17c76.js",
  n + "/internal/immutable/chunks/singletons.b58d624b.js",
  n + "/internal/immutable/chunks/stores.4dfe87dc.js",
  n + "/internal/immutable/chunks/user.1552103c.js",
  n + "/internal/immutable/entry/start.5e43ffaa.js"
], r = [
  n + "/favicon.png",
  n + "/icon.png",
  n + "/icon256x256.png",
  n + "/manifest.json",
  n + "/robots.txt"
], d = "1700682254533", l = self, c = `cache-${d}`, m = [...u, ...r];
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
