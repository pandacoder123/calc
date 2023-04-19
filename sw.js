const cacheName = 'my-site-cache-v2';
const urlsToCache = [
  '/calc/',
  '/calc/terms.html',
  '/calc/readme.md'
  '/calc/icon/fox.png',
  '/calc/index.js',
  '/calc/style.css',
  '/calc/icon/fox.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
