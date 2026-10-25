self.addEventListener('install', (e) => {
  self.skipWaiting(); // Активируем сразу
  e.waitUntil(
    caches.open('vegram-store-v20').then((cache) => {
      return cache.add('/index.html').catch(err => console.log('Cache error:', err));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
