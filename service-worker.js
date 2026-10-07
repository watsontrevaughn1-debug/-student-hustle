self.addEventListener('install', event => {
  event.waitUntil(caches.open('student-hustle-v1').then(cache =>
    cache.addAll(['./index.html','./manifest.json'])
  ));
  self.skipWaiting();
});
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
