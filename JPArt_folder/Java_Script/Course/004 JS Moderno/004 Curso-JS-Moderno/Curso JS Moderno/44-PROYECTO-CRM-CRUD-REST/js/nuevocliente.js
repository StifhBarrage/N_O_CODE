
(function() {

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        // Otro tipo de validación
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        
        if (validar(cliente)) {
            console.log('Todos los campos son obligatorios');
            return;
        }

        console.log('Todos los campos son correctos');

    }

    function validar(obj) {
        return !Object.values(obj).every(input => input !== '');
    }

    function mostrarAlerta(mensaje) {
        const alerta = document.createElement('p');
        alerta.textContent = mensaje;
        alerta.classList.add('alerta');

        const formulario = document.querySelector('#formulario');
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }




})();