var CACHE_NAME = "machine-learning-resources";
var urlsToCache = ["/", "/completed"];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUnti