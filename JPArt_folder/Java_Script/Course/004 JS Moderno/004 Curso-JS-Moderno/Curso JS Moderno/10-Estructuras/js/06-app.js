// Operador && 

const usuario = false;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if (!usuario || !puedePagar) {
    console.log('No puedes comprar');
} else if (!usuario) { // Operador ! indica negación (Si no es usuario)
    console.log('Inicia sesión o crea una cuenta');
} else if (!puedePagar) { // Operador ! indica negación
    console.log('Fondos insuficientes');
} else {
    console.log('No se puede procesar el pago');
}



