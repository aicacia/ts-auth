const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  e + "/internal/immutable/entry/app.9259f4c4.js",
  e + "/internal/immutable/assets/0.23026998.css",
  e + "/internal/immutable/nodes/0.9b79bdde.js",
  e + "/internal/immutable/nodes/1.0e9bf655.js",
  e + "/internal/immutable/nodes/10.6015244a.js",
  e + "/internal/immutable/nodes/11.b69a18c8.js",
  e + "/internal/immutable/nodes/2.1bacba16.js",
  e + "/internal/immutable/nodes/3.defa4731.js",
  e + "/internal/immutable/nodes/4.099aa3bd.js",
  e + "/internal/immutable/nodes/5.1fb6f2de.js",
  e + "/internal/immutable/nodes/6.e8f10ff7.js",
  e + "/internal/immutable/nodes/7.2dacaaa7.js",
  e + "/internal/immutable/nodes/8.0f3caed7.js",
  e + "/internal/immutable/nodes/9.0d144e27.js",
  e + "/internal/immutable/chunks/ApplicationEditor.3998605c.js",
  e + "/internal/immutable/chunks/Dropdown.b54f08a6.js",
  e + "/internal/immutable/chunks/Icon.d3d17fc4.js",
  e + "/internal/immutable/chunks/Modal.11c8883b.js",
  e + "/internal/immutable/chunks/Spinner.02976e77.js",
  e + "/internal/immutable/chunks/clickoutside.1c3dfa27.js",
  e + "/internal/immutable/chunks/control.f5b05b5f.js",
  e + "/internal/immutable/chunks/each.53f52777.js",
  e + "/internal/immutable/chunks/errors.06c64ea6.js",
  e + "/internal/immutable/chunks/i18n-svelte.bad49d15.js",
  e + "/internal/immutable/chunks/index.2ae88f8a.js",
  e + "/internal/immutable/chunks/index.a07aa4d5.js",
  e + "/internal/immutable/chunks/index.d7eb2526.js",
  e + "/internal/immutable/chunks/layout.9c52c970.js",
  e + "/internal/immutable/chunks/navigation.b34101f3.js",
  e + "/internal/immutable/chunks/notifications.a2f93f53.js",
  e + "/internal/immutable/chunks/paths.e2bce217.js",
  e + "/internal/immutable/chunks/pencil.8f6aee61.js",
  e + "/internal/immutable/chunks/plus.fcc1bfd4.js",
  e + "/internal/immutable/chunks/preload-helper.a4192956.js",
  e + "/internal/immutable/chunks/scheduler.281724f8.js",
  e + "/internal/immutable/chunks/singletons.bb1fec4b.js",
  e + "/internal/immutable/chunks/stores.c4f4d8c9.js",
  e + "/internal/immutable/chunks/user.e091a7a6.js",
  e + "/internal/immutable/entry/start.a66ef42a.js",
  e + "/internal/immutable/chunks/index.804cfeab.js"
], r = [
  e + "/favicon.png",
  e + "/icon.png",
  e + "/icon256x256.png",
  e + "/manifest.json",
  e + "/robots.txt"
], o = "1701512748470", l = self, c = `cache-${o}`, m = [...u, ...r];
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
