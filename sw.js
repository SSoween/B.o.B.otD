const CACHE_NAME = 'bob-dead-cache-v1.1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './vendor/bootstrap.min.css',
  './vendor/bootstrap.bundle.min.js',
  './vendor/bootstrap-icons.css',
  './vendor/jspdf.umd.min.js',
  './vendor/fonts/bootstrap-icons.woff',
  './vendor/fonts/bootstrap-icons.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/qr-install.png'
];

// Installation : mise en cache initiale
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interception des requêtes : Network First, fallback to Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});