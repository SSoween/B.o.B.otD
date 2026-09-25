// Service worker — cache local pour usage 100% hors-ligne.
// Stratégie : stale-while-revalidate (sert le cache immédiatement, revalide en tâche de fond).
// CACHE_NAME est versionné : le changer force le renouvellement du cache au prochain déploiement.
const CACHE_NAME = 'bob-dead-cache-v1.10';

const urlsToCache = [
  './index.html',
  './manifest.json',
  './sw.js',
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

// Installation : mise en cache initiale de tous les fichiers locaux de l'app.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activation : nettoyage des anciens caches (versions précédentes).
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Fetch :
// - Navigation (ouverture/rafraîchissement de page) -> app shell (index.html) en secours si hors-ligne.
// - Fichiers locaux précachés -> stale-while-revalidate.
// - Tout le reste (ex. CDN externes) -> réseau direct, sans réécriture (pas de mise en cache).
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('index.html'))
    );
    return;
  }

  if (!isSameOrigin) {
    return; // laisse le navigateur gérer les ressources externes (CDN) normalement
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(request).then(cachedResponse => {
        const fetchPromise = fetch(request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);
        return cachedResponse || fetchPromise;
      })
    )
  );
});