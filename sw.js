/**
 * GustoGrid Service Worker
 * Strategy: cache-first for app shell, network-first for HTML (with cache fallback)
 */

const CACHE_VERSION = 'gustogrid-v8';
const SHELL_ASSETS = [
  './',
  './index.html',
  './category.html',
  './recipe.html',
  './fridge.html',
  './saved.html',
  './creations.html',
  './profile.html',
  './manifest.json',
  './theme.css',
  './data/recipes.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/favicon.png',
  './icons/apple-touch-icon.png',
  // External deps — cached on first load so app works offline thereafter
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
];

// === INSTALL ===
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // Use individual add() calls so one failure doesn't kill install
      return Promise.all(
        SHELL_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] Failed to cache:', url, err);
          })
        )
      );
    })
  );
  self.skipWaiting();
});

// === ACTIVATE — clean old caches ===
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_VERSION)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// === FETCH — cache strategies ===
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET (POST, etc.)
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // HTML pages: network-first, cache fallback (so updates land fast online)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() => caches.match(request).then((r) => r || caches.match('./index.html')))
    );
    return;
  }

  // Everything else: cache-first, network fallback
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((res) => {
        // Only cache successful basic/CORS responses
        if (res.ok && (res.type === 'basic' || res.type === 'cors')) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(request, copy));
        }
        return res;
      }).catch(() => {
        // If the request was for an image, you could return a placeholder here
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});
