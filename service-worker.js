const n = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  n + "/internal/immutable/entry/app.1a8759b2.js",
  n + "/internal/immutable/assets/0.23026998.css",
  n + "/internal/immutable/nodes/0.09dd3d58.js",
  n + "/internal/immutable/nodes/1.4b5188a9.js",
  n + "/internal/immutable/nodes/10.8ff6c82e.js",
  n + "/internal/immutable/nodes/11.9fe23331.js",
  n + "/internal/immutable/nodes/2.86692bfb.js",
  n + "/internal/immutable/nodes/3.1f752e2c.js",
  n + "/internal/immutable/nodes/4.6352a351.js",
  n + "/internal/immutable/nodes/5.cb531851.js",
  n + "/internal/immutable/nodes/6.2be4c29d.js",
  n + "/internal/immutable/nodes/7.96669372.js",
  n + "/internal/immutable/nodes/8.0bf5a19c.js",
  n + "/internal/immutable/nodes/9.5101ea47.js",
  n + "/internal/immutable/chunks/ApplicationEditor.97d50e60.js",
  n + "/internal/immutable/chunks/Dropdown.586d11c2.js",
  n + "/internal/immutable/chunks/Icon.1c7886f7.js",
  n + "/internal/immutable/chunks/Modal.b268260d.js",
  n + "/internal/immutable/chunks/Spinner.d43ed761.js",
  n + "/internal/immutable/chunks/clickoutside.1c3dfa27.js",
  n + "/internal/immutable/chunks/control.f5b05b5f.js",
  n + "/internal/immutable/chunks/each.a7fc62a0.js",
  n + "/internal/immutable/chunks/errors.f448cefc.js",
  n + "/internal/immutable/chunks/index.6dc2cd99.js",
  n + "/internal/immutable/chunks/index.734baa98.js",
  n + "/internal/immutable/chunks/index.d7eb2526.js",
  n + "/internal/immutable/chunks/layout.b8530220.js",
  n + "/internal/immutable/chunks/navigation.10b5eff6.js",
  n + "/internal/immutable/chunks/notifications.e52be7c5.js",
  n + "/internal/immutable/chunks/paths.841d00ad.js",
  n + "/internal/immutable/chunks/pencil.4fdcd005.js",
  n + "/internal/immutable/chunks/plus.906b1819.js",
  n + "/internal/immutable/chunks/scheduler.0fc17c76.js",
  n + "/internal/immutable/chunks/singletons.67ed1514.js",
  n + "/internal/immutable/chunks/stores.d779b1c7.js",
  n + "/internal/immutable/chunks/user.5c0b3fb6.js",
  n + "/internal/immutable/entry/start.2181251c.js"
], r = [
  n + "/favicon.png",
  n + "/icon.png",
  n + "/icon256x256.png",
  n + "/manifest.json",
  n + "/robots.txt"
], o = "1700756908047", l = self, c = `cache-${o}`, m = [...u, ...r];
l.addEventListener("install", (e) => {
  async function a() {
    await (await caches.open(c)).addAll(m);
  }
  e.waitUntil(a());
});
l.addEventListener("activate", (e) => {
  async function a() {
    for (const t of await caches.keys())
      t !== c && await caches.delete(t);
  }
  e.waitUntil(a());
});
l.addEventListener("fetch", (e) => {
  if (e.request.method === "GET") {
    async function a() {
      const t = new URL(e.request.url), s = await caches.open(c);
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
