const notifyBtn = document.querySelector('#notificar');

notifyBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => console.log(`El resultado es ${resultado}`) )
});

const lookNotificationBtn = document.querySelector('#verNotificacion');

lookNotificationBtn.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notification = new Notification('this is the notification', {
            icon: 'img/ccj.png',
            body: 'Project-NOTIFICATIONS-APIs-JS'
        });

        notification.onclick = function() {
            window.open('https://github.com/stifhbl');
        }
    }
});
