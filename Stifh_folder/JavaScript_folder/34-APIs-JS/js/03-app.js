window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus() {
    if(navigator.onLine){
        console.log('You are online');

    } else {
        console.log('You are offline');
    }
}
