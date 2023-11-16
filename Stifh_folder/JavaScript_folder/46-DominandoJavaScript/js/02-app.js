// hoisting en funciones

// En las funciones se aplica el hoisting, 
//es decir, se puede llamar a la función antes de declararla


// Se puede llamar a la función antes de declararla
// porque se está declarando con la palabra reservada function

obtenerCliente('Stifh');
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}

// No se puede llamar a la función antes de declararla
// porque se está asignando a una variable
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es ${nombre}`);
}
obtenerCliente2('Stifh');

