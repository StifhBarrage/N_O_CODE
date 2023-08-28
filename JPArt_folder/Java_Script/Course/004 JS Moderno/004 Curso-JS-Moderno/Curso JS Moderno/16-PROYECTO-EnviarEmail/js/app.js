document.addEventListener('DOMContentLoaded', () => {
    
    //Seleccionar los elementos de la interfaz de usuario
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');  
    const inputMensaje = document.querySelector('#mensaje');

    // Event Listener
    inputEmail.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim() === '') {
            console.log('No hay nada');
        } else {
            console.log('Si hay algo');
        }
    };



});