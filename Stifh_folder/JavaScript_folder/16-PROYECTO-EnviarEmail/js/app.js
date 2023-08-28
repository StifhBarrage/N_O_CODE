

document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        subject: '',
        message: ''
    }
    
    // interface elements
    const inputEmail = document.querySelector('#email');
    const inputSubject = document.querySelector('#subject');
    const inputMessage = document.querySelector('#message');
    const form = document.querySelector('#formulario'); 
    const btnSummit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    const inputCc = document.querySelector('#cc');


    // assign events
    inputEmail.addEventListener('input', validate);
    inputSubject.addEventListener('input', validate);
    inputMessage.addEventListener('input',validate);
    inputCc.addEventListener('input', validateCc);
    form.addEventListener('submit', sendEmail);
    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        resetForm();

    });

    function sendEmail(e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');


        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetForm();

            const alertSuccess = document.createElement('P');
            alertSuccess.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'my-10', 'font-bold', 'uppercase');
            alertSuccess.textContent = 'El mensaje se envió correctamente';
            form.appendChild(alertSuccess);

        }, 3000);
    }

    function validate(e) {

        if (e.target.value.trim() === '') {
            showAlert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            checkEmailObject();
            return;
        }
         if ( e.target.id === 'email' && !validateEmail(e.target.value)) {
            showAlert(`El campo ${e.target.id} no es válido`, e.target.parentElement);
            email[e.target.name] = '';
            checkEmailObject();
            return;
        }
        clearAlert(e.target.parentElement);

        // add the value to the object
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // check the email object
        checkEmailObject();

        
    }

    function showAlert(message, reference) {
        clearAlert(reference);
        
        // check if there is an alert
        const alert = reference.querySelector('.bg-red-600');
    
        if (alert) {
            alert.remove();
        }

        // create the alert
        const error = document.createElement('P');
        error.textContent = message;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        // insert in the form
        reference.appendChild(error);
    }

    function clearAlert(reference) {
        const alert = reference.querySelector('.bg-red-600');
        if (alert) {
            alert.remove();
        }
    }

    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
        const resultado = regex.test(email);
        return resultado;
    }

    function validateCc(e) {
        const ccEmails = e.target.value.split(',').map(email => email.trim());

        const invalidCCs = ccEmails.filter(email => email !== '' && !validateEmail(email));
    
        if (invalidCCs.length > 0) {
            showAlert(`Los siguientes CCs no son válidos: ${invalidCCs.join(', ')}`, e.target.parentElement);
            email.cc = ''; // Reiniciar el valor si hay CCs inválidos
            checkEmailObject();
            return;
        }
    
        clearAlert(e.target.parentElement);
        email.cc = ccEmails.join(', ').toLowerCase();
        checkEmailObject();
    }

    function checkEmailObject() {
        console.log(email);
        if (Object.values(email).includes('')) {
            btnSummit.classList.add( 'opacity-50');
            btnSummit.disabled = true;
            return 

        }
        btnSummit.classList.remove( 'opacity-50');
        btnSummit.disabled = false;
    }

    function resetForm() {
            // reset the form
            email.email = '';
            email.subject = '';
            email.message = '';
    
            form.reset();
            checkEmailObject();
    }

});



