// funciones puras

const duplicar = (x) => x * 2;
console.log(duplicar(2));

// no cambio el valor original
const num1 = 20;

// nuevo valor de num1
const resultado = duplicar(num1);
console.log(resultado);
 