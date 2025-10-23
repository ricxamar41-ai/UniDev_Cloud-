self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open('unidev-cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './10.6_donationDashboard.js',
        './10.7_donationPanel.css',
        './index.css',
        './style_unidev.css',
        './logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
