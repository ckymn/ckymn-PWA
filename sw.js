// hem css hem html hem img ulasmak icin ana dizine ekleme yapilmali.

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((reponse) => {
      return response || fetch(e.request);
    })
  );
});
