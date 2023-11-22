const n = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  n + "/internal/immutable/entry/app.2a98534d.js",
  n + "/internal/immutable/assets/0.23026998.css",
  n + "/internal/immutable/nodes/0.5a4ff335.js",
  n + "/internal/immutable/nodes/1.6e6c1b69.js",
  n + "/internal/immutable/nodes/10.707f12ca.js",
  n + "/internal/immutable/nodes/11.9e785991.js",
  n + "/internal/immutable/nodes/2.d2b51f2a.js",
  n + "/internal/immutable/nodes/3.67ba42af.js",
  n + "/internal/immutable/nodes/4.5897ba67.js",
  n + "/internal/immutable/nodes/5.3b02b5df.js",
  n + "/internal/immutable/nodes/6.150aea07.js",
  n + "/internal/immutable/nodes/7.c7d588de.js",
  n + "/internal/immutable/nodes/8.0bf5a19c.js",
  n + "/internal/immutable/nodes/9.5b126b12.js",
  n + "/internal/immutable/chunks/ApplicationEditor.010d5136.js",
  n + "/internal/immutable/chunks/Dropdown.586d11c2.js",
  n + "/internal/immutable/chunks/Icon.1c7886f7.js",
  n + "/internal/immutable/chunks/Modal.0520b341.js",
  n + "/internal/immutable/chunks/Spinner.d43ed761.js",
  n + "/internal/immutable/chunks/clickoutside.1c3dfa27.js",
  n + "/internal/immutable/chunks/control.f5b05b5f.js",
  n + "/internal/immutable/chunks/each.a7fc62a0.js",
  n + "/internal/immutable/chunks/errors.1cf6fdb1.js",
  n + "/internal/immutable/chunks/index.6dc2cd99.js",
  n + "/internal/immutable/chunks/index.734baa98.js",
  n + "/internal/immutable/chunks/index.d7eb2526.js",
  n + "/internal/immutable/chunks/layout.b8530220.js",
  n + "/internal/immutable/chunks/navigation.5e18fbb9.js",
  n + "/internal/immutable/chunks/notifications.91c3b133.js",
  n + "/internal/immutable/chunks/paths.061f1898.js",
  n + "/internal/immutable/chunks/pencil.4fdcd005.js",
  n + "/internal/immutable/chunks/plus.906b1819.js",
  n + "/internal/immutable/chunks/scheduler.0fc17c76.js",
  n + "/internal/immutable/chunks/singletons.91ab8730.js",
  n + "/internal/immutable/chunks/stores.e0d43b79.js",
  n + "/internal/immutable/chunks/user.4bc48b75.js",
  n + "/internal/immutable/entry/start.9ce97707.js"
], r = [
  n + "/favicon.png",
  n + "/icon.png",
  n + "/icon256x256.png",
  n + "/manifest.json",
  n + "/robots.txt"
], b = "1700681968273", l = self, c = `cache-${b}`, m = [...u, ...r];
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
