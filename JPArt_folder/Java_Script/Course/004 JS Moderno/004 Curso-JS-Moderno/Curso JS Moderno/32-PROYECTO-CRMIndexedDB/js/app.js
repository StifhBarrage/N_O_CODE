(function (){

    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

    });

    // Crea la base de datos de IndexDB
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function() { // En caso de error
            console.log('Hubo un error');
        };

        crearDB.onsuccess = function() { // En caso de exito
            DB = crearDB.result;
        };

        crearDB.onupgradeneeded = function(e) { // Solo se ejecuta una vez
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true });
            
            // Definir todas las columnas
            objectStore.createIndex('nombre', 'nombre', { unique: false });
            objectStore.createIndex('email', 'email', { unique: true });
            objectStore.createIndex('telefono', 'telefono', { unique: false });
            objectStore.createIndex('empresa', 'empresa', { unique: false });
            objectStore.createIndex('id', 'id', { unique: true });


            console.log('DB Lista y creada');
        }

    }

})();