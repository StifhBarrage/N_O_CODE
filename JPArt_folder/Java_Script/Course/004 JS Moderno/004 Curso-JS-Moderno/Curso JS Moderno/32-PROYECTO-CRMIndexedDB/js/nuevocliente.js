(function (){ // IIFE para que no se mezcle con otros archivos
   
    let DB;
    const formulario = document.querySelector('#formulario');

    
    document.addEventListener('DOMContentLoaded', () => {
        
        conectarDB();

        formulario.addEventListener('submit', validarCliente);

    });

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };

        abrirConexion.onsuccess = function() {
            DB = abrirConexion.result;
        };
    }

    function validarCliente(e) {
        e.preventDefault();

        // Leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        // Mostrar error si los campos estan vacios
        if (nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios', 'error');

            return;
        }	

        // Crear un objeto con la informacion

        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now() // Genera un id unico 
        };

        crearNuevoCliente(cliente);

    function crearNuevoCliente (cliente) {

        const transaction = DB.transaction(['crm'], 'readwrite');   // transaction es una variable que almacena la transaccion  y el primer parametro es el nombre de la base de datos y el segundo es el modo de acceso

       
        const objectStore = transaction.objectStore('crm'); // objectStore es una variable que almacena el objeto de la base de datos
        
        objectStore.add(cliente); // add es un metodo que agrega un nuevo registro a la base de datos

        transaction.onerror = function() {
            imprimirAlerta('Hubo un error', 'error');
        };

        transaction.oncomplete = function() {
            imprimirAlerta('El cliente se agrego correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        
    
    };
    }


    function imprimirAlerta (mensaje, tipo) {

        const alerta = document.querySelector('.alerta');

        if (!alerta) { // Si no hay alerta, crear una
            //crear alerta
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border', 'alerta');
        
        if (tipo === 'error') {
            divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        divMensaje.textContent = mensaje; // Agregar texto

        formulario.appendChild(divMensaje); // Agregar al DOM

        setTimeout(() => {
            divMensaje.remove();
        }, 3000); // Eliminar alerta despues de 3 segundos

        }


        
 
    }


})();