document.addEventListener('DOMContentLoaded', () => {
    

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    //Seleccionar los elementos de la interfaz de usuario
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');  
    const inputMensaje = document.querySelector('#mensaje');
    const inputCC = document.querySelector('#CC');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');


    // Event Listener

    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputCC.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();

        resetFormulario()
    });


    // Funciones

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.remove('hidden');
        spinner.classList.add('flex');

        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');
        
            resetFormulario()

            // crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'my-10', 'font-bold', 'uppercase');
            alertaExito.textContent = 'El mensaje se envió correctamente';

            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        
        }, 3000);
    }

    function validar(e) {

        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} no puede estar vacío`, e.target.parentElement);
            email[e.target.name] = ''
            comprobarEmail();
            return;
        }

        // Validar unicamente el campo de email
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta(`El campo ${e.target.id} no es válido`, e.target.parentElement);
            email[e.target.name] = ''
            comprobarEmail();
            return; 
        }

        if (e.target.id === 'CC' && !validarEmail(e.target.value)) {
            mostrarAlerta(`El campo ${e.target.id} no es válido`, e.target.parentElement);
            CC[e.target.name] = ''
            comprobarEmail();
            return; 
        }

        limpiarAlerta(e.target.parentElement);

        // Asignar los valores al objeto
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();

    };

     
    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')
        
        // Inyectar el error al formulario
        referencia.appendChild(error);
        

    }


    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if ((Object.values(email).includes(''))) {
            btnSubmit.classList.add('opacity-50', 'cursor-not-allowed');
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove('opacity-50', 'cursor-not-allowed');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    }
});