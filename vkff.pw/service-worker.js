self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
});

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         fetch(event.request)
//             .then((response) => {
//                 return response;
//             })
//             .catch((error) => {
//                 console.log('Fetch failed; returning offline page instead.', error);
//             })
//     );
// });
