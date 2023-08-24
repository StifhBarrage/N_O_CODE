// Operador Ternario ==> Igual al if pero en una sola linea

const autenticado = true;
const puedePagar = true;

console.log(autenticado && puedePagar ? 'Si está autenticado' : 'No está autenticado');

// ? = if
// : = else

// If anidado dentro de un ternario
console.log(autenticado ? puedePagar ? 'Si está autenticado y puede pagar' : 'Si está autenticado pero no puede pagar' : 'No está autenticado');
