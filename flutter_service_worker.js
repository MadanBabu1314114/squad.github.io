'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "654c9fb2987e7d007b935ade765b62cb",
"assets/AssetManifest.bin.json": "b6e8f44cf194bc662e95761977d36a4b",
"assets/AssetManifest.json": "ebd110a3d2e14b613183997de88e7c14",
"assets/assets/fonts/Enixe.otf": "873e9575881c69be715724c0e8557326",
"assets/assets/fonts/Enixe.ttf": "ffd6cb1d4038b38a1bbffcf7b1485229",
"assets/assets/fonts/Kanit-Black.ttf": "98e93fc09832d3891a57162b83ecb930",
"assets/assets/fonts/Kanit-Bold.ttf": "69646b07726772636b613cc5e12a1f28",
"assets/assets/fonts/Kanit-ExtraLight.ttf": "8b786d6635f731d5bfe226e9f776531b",
"assets/assets/fonts/Kanit-Medium.ttf": "2fedce7deb446c41cc5274c226b43c04",
"assets/assets/fonts/Kanit-SemiBold.ttf": "efc1b35c18175cae0b8a3d06e3025cbe",
"assets/assets/images/173575-vector-football-free-transparent-image-hq%25204%2520(1).png": "a626f81c9bbcc425b0e52c194fce40c5",
"assets/assets/images/173575-vector-football-free-transparent-image-hq%25204.png": "a78735d8f4c248f44b03e81832eb322c",
"assets/assets/images/482312-light-color-wallpaper-top-free-light-color-background.jpg": "7201d764bc0b343d797eb32495d741a6",
"assets/assets/images/address.png": "4bfe781eb82a2b9ed2451c562b87c981",
"assets/assets/images/Background.png": "d35cf4c2ad9847f1718edd8aa19163a4",
"assets/assets/images/back_icon.png": "5e0ef358f861a8ad65e6cd83cdaf18af",
"assets/assets/images/EYE-NEW-SEE%2520-MDF%25203.png": "133c9cbba507cca9516eb905a1af0c13",
"assets/assets/images/football.png": "54920835a8438e50e7fcc5a6918bed3f",
"assets/assets/images/small_text_field.png": "490cfdcd88679731a9d2d77d79c3bcc9",
"assets/assets/images/submit_btn.png": "b4669ed4bb45625d149b2660d2f2d0eb",
"assets/assets/images/textFiledButton.png": "fdf289b322c66b07f4b292c3b21c404c",
"assets/assets/images/text_field.png": "7ad74a915c28d9e42f61188feba86ff1",
"assets/assets/images/text_field_website.png": "2c3138fdaca4d911877c0ebcb883196c",
"assets/assets/images/Thunderstorm.png": "6fa73128520cbbef80eb0136fc4d592b",
"assets/assets/images/weather_icon-min.png": "9050a1a7513f438b375d6c46c468fd97",
"assets/assets/lottie/Flow%25201@512p-50fps%2520(1).gif": "51ceb9dd776c953cad3554af0aff75ff",
"assets/assets/lottie/foot_ball_lottie.json": "c658a2b746e1ccb1fb2b767ff85fd34d",
"assets/assets/lottie/hi_lottie.json": "0279f4c5230a4f285640a189f260a49d",
"assets/FontManifest.json": "b2b7adeac025772943363d115c84401e",
"assets/fonts/MaterialIcons-Regular.otf": "366d935aac4fe755a1ea6a6c9789b4de",
"assets/NOTICES": "f156c158b6b9b03c1a2ada776efb3585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "6fc5f051d473c3ac9246128a339c0038",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aa60878e9eb7afc0dc400dfc4ea733ed",
"/": "aa60878e9eb7afc0dc400dfc4ea733ed",
"main.dart.js": "d283a1c854e219139a798f9a649c18c8",
"manifest.json": "e575eb18f76c2214b505d86f3cf121be",
"version.json": "daf5c6e926b143ed3bf9a563629b118d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
