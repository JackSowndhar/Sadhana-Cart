"use strict";

// Simple helper to return translation paths (or define them directly)
const getTranslationPaths = (langs) =>
  langs.map((lang) => `/locales/${lang}/translation.json`);

// Constants
const CACHE_NAME = "e-commerce-v9";
const ASSETS = [
  "/",
  "/index.html",
  ...getTranslationPaths(["en", "ar", "fr", "hl", "hu", "ja", "ru"]),
];

// Cache core assets
async function cacheAssets() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(ASSETS);
  clearOldCaches();
}

// Handle fetch and cache GET requests only
async function handleFetchAndCache(request) {
  // Only cache GET requests
  if (request.method !== "GET") {
    return fetch(request);
  }

  // Skip caching Firebase installs or extensions
  const skipUrls = ["chrome-extension", "firebaseinstallations", "googleapis"];
  if (skipUrls.some((part) => request.url.includes(part))) {
    return fetch(request);
  }

  const cacheResponse = await caches.match(request);
  const networkResponse = fetch(request)
    .then(async (networkRes) => {
      if (networkRes.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, networkRes.clone());
      }
      return networkRes;
    })
    .catch((err) => {
      console.error("Fetch failed:", err);
    });

  return cacheResponse || networkResponse;
}

// Update assets in cache
async function updateCachedAssets() {
  const cache = await caches.open(CACHE_NAME);

  try {
    const responses = await Promise.all(
      ASSETS.map(async (asset) => {
        const fetchedResponse = await fetch(asset);
        if (fetchedResponse.ok) {
          await cache.put(asset, fetchedResponse.clone());
        }
        return fetchedResponse;
      })
    );

    return responses;
  } catch (error) {
    console.error("Failed to update cache:", error);
  }
}

// Clear old caches
async function clearOldCaches() {
  const cacheKeys = await caches.keys();
  await Promise.all(
    cacheKeys
      .filter((key) => key !== CACHE_NAME)
      .map((key) => caches.delete(key))
  );
}

// Events
self.addEventListener("install", (event) => {
  event.waitUntil(cacheAssets());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(updateCachedAssets());
});

self.addEventListener("fetch", (event) => {
  // Only intercept GET requests
  if (event.request.method === "GET") {
    event.respondWith(handleFetchAndCache(event.request));
  }
});
