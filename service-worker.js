self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('binary-converter-v1').then(function(cache) {
      return cache.addAll([
        '/',
        'index.html',
        'manifest.json',
        'icons/icon-192x192.png',
        'icons/icon-512x512.png',
        'script.js',
        'https://code.jquery.com/jquery-3.6.0.min.js',
        'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
