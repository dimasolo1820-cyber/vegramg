self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('vegram-store-v10').then((cache) => {
      // Пытаемся сохранить только главную страницу, чтобы не было ошибки
      return cache.add('/index.html').catch(err => console.log('Cache error:', err));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
