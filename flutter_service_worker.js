'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "896449a2050147aa7eb0404fe2d8c006",
"splash/logo.png": "a0a4db6d6e59f0b4a023106b2427a688",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "f1e9a87f5faf445559e19bf4853ce1c0",
"index.html": "be62a01601bbec12bb3faa42d6aafb24",
"/": "be62a01601bbec12bb3faa42d6aafb24",
"main.dart.js": "8d0df86bdabc30901c6477cdb94aa0ae",
"16.png": "21981bdbb24f223b6184e14bf91f7d2c",
"icons/512.png": "42b138ebd8e7a0c05d0f4c87af435074",
"icons/logo.png": "a0a4db6d6e59f0b4a023106b2427a688",
"icons/192.png": "06369bf2f0390677adf29a07079020dc",
"manifest.json": "b67f025866c23f8fa4159446245ec4a3",
"assets/AssetManifest.json": "da01fbcb1fcbcbb7fdbda88a064790be",
"assets/NOTICES": "f77e40c0517503b67ce7545dca380b68",
"assets/FontManifest.json": "c5e91fbbb4772d416cdd6e48b357a318",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/fonts/roboto.ttf": "46e48ce0628835f68a7369d0254e4283",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/CustomIcons.ttf": "2b6620b65feff0ccbb4b52458309f6e2",
"assets/assets/images/person_circle.svg": "dd0df25329ea4906d3084e6abc5e1348",
"assets/assets/images/twitterlogo.jpg": "f781719ebe1bc693c634509c51d2bf00",
"assets/assets/images/person.svg": "5f481b2653b3a4f98e9cffb6348dadf7",
"assets/assets/images/google_icon.png": "54955fcf195ba64a7ef3fc5213bda081",
"assets/assets/images/logout.svg": "f5d69802881b4ddc1976877f0d943feb",
"assets/assets/images/bookmark_plus.svg": "c95717e6c86ec8fbdccb4cb89f8628d4",
"assets/assets/images/tag.svg": "23b5fffc282fa8ce8d935ab6b23f5dd6",
"assets/assets/images/arrow_back.svg": "d7056b618f9606c055cbd23c27e808a6",
"assets/assets/images/user_status.svg": "66b97b9cde14a763120b75daf8477f43",
"assets/assets/images/user.png": "a19c7d4bb9c368fc49a6a8e66b9f8623",
"assets/assets/images/funnel.svg": "76c3a2d70e598f6af95cf47c5f1c5c88",
"assets/assets/images/googlelogo.png": "a71287b6208aba540472f58d3e6db77e",
"assets/assets/images/gear.svg": "f142545c2a66146ecedbd18c7fce0aeb",
"assets/assets/images/speedometer.svg": "3399f6ae46b83e88eeea480a2e3360ba",
"assets/assets/images/people.svg": "172ce8ec296098b6af36640dfa9760ff",
"assets/assets/images/logo_ex.png": "053dec3e0c37d196ed9e08d937752c64",
"assets/assets/images/person_plus.svg": "4cfb60dae90e9b7c3266310ecfe88389",
"assets/assets/images/logo.png": "a0a4db6d6e59f0b4a023106b2427a688",
"assets/assets/images/edit.svg": "5ed85260191701fe68dfc5db123782e1",
"assets/assets/images/plus_circle.svg": "da5b7948e12ead925f16e5b36edbf926",
"assets/assets/images/delete.svg": "8db4e757ae6c3d66dfb70339911a8eef",
"assets/assets/images/fblogo.jpg": "def9605cd1ca41de96da0d04fae3a7b6",
"assets/assets/images/eye.svg": "0fcc1944eba8716d478967c690ec7072",
"assets/assets/images/gmailogo.jpg": "fd20f349aaf833fa72f58f606c116454",
"assets/assets/images/calendar_plus.svg": "f92d5bab5373c4fc1de17dbaa714c5fe",
"assets/assets/images/logo.svg": "e639b112dd26be10d9406ec1fefcbbf8",
"assets/assets/images/help.svg": "8c6f9b66b1f6e3ee3edda77c38149e10",
"assets/assets/images/logo_ex.svg": "15e45fd488d0457acd3bcfca313d20ba",
"assets/assets/countries.json": "f08cb48768db66d1698fb0bf715d1e17",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
