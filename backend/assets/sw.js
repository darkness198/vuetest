importScripts("/precache-manifest.6780eb9a6dc9f97700acb9e62c0a8e67.js", "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/* eslint-disable */
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.networkFirst()
)

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp('(.*)/api/(.*)$'),
  workbox.strategies.networkFirst()
)


