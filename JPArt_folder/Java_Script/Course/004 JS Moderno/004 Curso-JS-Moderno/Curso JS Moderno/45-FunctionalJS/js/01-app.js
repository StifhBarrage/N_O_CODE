//Programación Funcional

const suma = function (a, b) {
    return a + b;
}

// First Class Functions => Soporta funciones como argumentos
const resultado = suma;

console.log(resultado(10, 20));