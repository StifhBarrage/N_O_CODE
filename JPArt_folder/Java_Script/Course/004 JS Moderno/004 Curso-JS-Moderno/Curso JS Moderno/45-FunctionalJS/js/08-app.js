

// const cliente = 'Juan';

// function mostrarCliente() {
//     const cliente = 'Pedro';
//     console.log(cliente);
// }


// console.log(cliente); // Juan porque no sabe que Pedro existe
// mostrarCliente(); // Pedro porque no sabe que Juan existe


// Closures

const obtenerCliente = () => {
    const nombre = 'Juan';

    function muestraNombre() {
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente(); // Juan porque la funcion muestraNombre() recuerda el valor de nombre