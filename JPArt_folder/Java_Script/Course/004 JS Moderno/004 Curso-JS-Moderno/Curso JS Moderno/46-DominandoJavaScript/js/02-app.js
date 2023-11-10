// Hoisting de funciones


// Es igual que (function declaration)
function obtenerCliente(cliente) {
    console.log(`El valor de cliente es: ${cliente}`);
}

obtenerCliente('Jhon');


// Es igual que (function declaration) --> FUNCIONA
obtenerCliente2('Jhon');

function obtenerCliente2(cliente) {
    console.log(`El valor de cliente es: ${cliente}`);
}




// Function expression

const cliente = function(nombreCliente) {
    console.log(`Mostrando datos del cliente: ${nombreCliente}`);
}

cliente('Jhon');

// No es igual que (function expression)

cliente2('Jhon'); // Error --> NO FUNCIONA

const cliente2 = function(nombreCliente) {
    console.log(`Mostrando datos del cliente: ${nombreCliente}`);
}

