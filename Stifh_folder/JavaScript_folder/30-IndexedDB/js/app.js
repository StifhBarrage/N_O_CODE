// indexDB is a database that is built into the browser
// it is a noSQL database
// it is a key value pair database
// it is a persistent database
// it is a transactional database
// it is a client side database
// it is a schemaless database
// it is a asynchronous database
// it is a database that is built into the browser

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB(){
    //crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error a la hora de crear la base de datos');
    }


    // si se crea bien
    crmDB.onsuccess = function(){
        console.log('Base de datos creada');

        //guardar el resultado
        DB = crmDB.result;
        console.log(DB);
    }


    // configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        // definir el objectstore, primer parametro el nombre de la base de datos, segundo las opciones
        // keypath es el indice de la base de datos
        const objectStore = db.createObjectStore('crm', {keyPath: 'crm', autoIncrement: true});

        //crear las columnas
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});

        console.log('Columnas creadas');
    }

}


function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 123456789,
        nombre: 'stifh',
        email: 'correo@correo.com'
    }

    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);

}