// sw.js

const CACHE_NAME = "hcpg-report-v1";

// We DO NOT aggressively cache Firestore apps (important fix)
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Force network-first for everything (fixes stale monthly totals)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
