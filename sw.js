self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('grosirsembako-v1').then((cache) => {
          return cache.addAll([
              '/index.html',
              '/styles.css',
              '/app.js',
              'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
              'https://code.jquery.com/jquery-3.5.1.slim.min.js',
              'https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js',
              'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
          ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
          return response || fetch(event.request);
      })
  );
});
