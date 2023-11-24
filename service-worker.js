const e = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  e + "/internal/immutable/entry/app.8635bbdd.js",
  e + "/internal/immutable/assets/0.23026998.css",
  e + "/internal/immutable/nodes/0.1be94ad8.js",
  e + "/internal/immutable/nodes/1.81b6753b.js",
  e + "/internal/immutable/nodes/10.783f954f.js",
  e + "/internal/immutable/nodes/11.c61e2568.js",
  e + "/internal/immutable/nodes/2.42456932.js",
  e + "/internal/immutable/nodes/3.1b982277.js",
  e + "/internal/immutable/nodes/4.03d9959e.js",
  e + "/internal/immutable/nodes/5.f90a6d8d.js",
  e + "/internal/immutable/nodes/6.3ef67914.js",
  e + "/internal/immutable/nodes/7.ecd4df5e.js",
  e + "/internal/immutable/nodes/8.8e671a92.js",
  e + "/internal/immutable/nodes/9.5b792259.js",
  e + "/internal/immutable/chunks/ApplicationEditor.57fa2171.js",
  e + "/internal/immutable/chunks/Dropdown.b54f08a6.js",
  e + "/internal/immutable/chunks/Icon.d3d17fc4.js",
  e + "/internal/immutable/chunks/Modal.586f79b9.js",
  e + "/internal/immutable/chunks/Spinner.02976e77.js",
  e + "/internal/immutable/chunks/clickoutside.1c3dfa27.js",
  e + "/internal/immutable/chunks/control.f5b05b5f.js",
  e + "/internal/immutable/chunks/each.53f52777.js",
  e + "/internal/immutable/chunks/errors.dfb17a50.js",
  e + "/internal/immutable/chunks/i18n-svelte.a2172b89.js",
  e + "/internal/immutable/chunks/index.2ae88f8a.js",
  e + "/internal/immutable/chunks/index.d7eb2526.js",
  e + "/internal/immutable/chunks/index.da9acd2d.js",
  e + "/internal/immutable/chunks/layout.9c52c970.js",
  e + "/internal/immutable/chunks/navigation.f5795296.js",
  e + "/internal/immutable/chunks/notifications.8bbc2e1f.js",
  e + "/internal/immutable/chunks/paths.10786b92.js",
  e + "/internal/immutable/chunks/pencil.8f6aee61.js",
  e + "/internal/immutable/chunks/plus.fcc1bfd4.js",
  e + "/internal/immutable/chunks/preload-helper.a4192956.js",
  e + "/internal/immutable/chunks/scheduler.281724f8.js",
  e + "/internal/immutable/chunks/singletons.2a3723e9.js",
  e + "/internal/immutable/chunks/stores.aea969df.js",
  e + "/internal/immutable/chunks/user.9742e23d.js",
  e + "/internal/immutable/entry/start.3bebb56e.js",
  e + "/internal/immutable/chunks/index.804cfeab.js"
], r = [
  e + "/favicon.png",
  e + "/icon.png",
  e + "/icon256x256.png",
  e + "/manifest.json",
  e + "/robots.txt"
], b = "1700846612384", l = self, c = `cache-${b}`, m = [...u, ...r];
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
