// IndexedDB ==> No agregar datos delicados

let DB;


document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setInterval(() => {
        crearCliente();
    }, 5000);

});


function crmDB() {
    // Crear la base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);
    
    // Si hay un error, lanzarlo
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear la BD');
    }

    // Si todo esta bien, asignar a database el resultado
    crmDB.onsuccess = function() {
        console.log('Base de datos creada');

        DB = crmDB.result;
    }


    // Configuración de la base de datos
    crmDB.onupgradeneeded = function(e) { // Solo se ejecuta una vez
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', { //Permite crear las columnas de la BD 
            keyPath: 'crm', 
            autoIncrement: true // Incrementa el valor de la llave
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });


        console.log('Columnas creadas');
    }


} 

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite'); // Selecciona la tabla y el tipo de transacción
   
    transaction.oncomplete = function() {
        console.log('Transacción completada');
    }

    transaction.onerror = function() {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 1234567890,
        nombre: 'Juan',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
    
}