const CACHE_NAME = "unidev-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./10.7_donationPanel.css",
  "./10.8_donationDashboard.js",
  "./Background (4).png",
  "./logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
