
// Cuando se instala el Service Worker
self.addEventListener('install', e => {
    console.log('Service Worker: Installed');

    console.log(e);
});

// Cuando se activa el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');

    console.log(e);
});