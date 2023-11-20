// PWA Progressive web Application

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('Registro de SW exitoso', registrado))
        .catch(error => console.warn('Error al tratar de registrar el sw...', error));
} else {
    console.warn('Service Workers no soportados en este navegador');
}