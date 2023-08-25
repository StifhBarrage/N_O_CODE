

document.addEventListener('DOMContentLoaded', function() {
    
    // interface elements
    const inputEmail = document.querySelector('#email');
    const inputSubject = document.querySelector('#asunto');
    const inputMessage = document.querySelector('#mensaje');
    const form = document.querySelector('#formulario'); 

    // assign events
    inputEmail.addEventListener('blur', validate);
    inputSubject.addEventListener('blur', validate);
    inputMessage.addEventListener('blur',validate);

    function validate(e) {


        if (e.target.value.trim() === '') {
            showAlert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            console.log('No hay nada');
            return;
        }
        clearAlert(e.target.parentElement);
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
        console.log(error);

        // insert in the form
        reference.appendChild(error);
    }
    function clearAlert() {
        const alert = reference.querySelector('.bg-red-600');
        if (alert) {
            alert.remove();
        }
    }

    


});
