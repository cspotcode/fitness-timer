const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js'
];

// self.addEventListener('install', (event: ServiceWorkerEventMap['']) => {
//     // Perform install steps
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then(function (cache) {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

self.addEventListener('fetch', async (event) => {
    let response = await caches.match(event.request);
    // Cache hit - return response
    if (!response) {
        response = await fetch(event.request);
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
        }

        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.
        var responseToCache = response.clone();

        (await caches.open(CACHE_NAME)).put(event.request, responseToCache);
    }

    event.respondWith(response);
});
