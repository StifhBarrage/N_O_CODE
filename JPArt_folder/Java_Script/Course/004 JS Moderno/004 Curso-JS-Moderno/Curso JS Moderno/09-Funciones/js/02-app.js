//DIFERENCIA ENTRE AMBAS

// Declaración de una función

sumar(); // Llamado de la función -> OK porque se puede llamar una función antes de declararla
function sumar() {
    console.log(2 + 2);
}


// Function expression
sumar2(); // Llamado de la función -> ERROR porque no se puede llamar una función antes de declararla
const sumar2 = function() {
    console.log(3 + 3);
}       


// Se conoce como hoisting -> elevación

