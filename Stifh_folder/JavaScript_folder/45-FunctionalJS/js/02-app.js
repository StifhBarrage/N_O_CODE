const suma = (a,b) => a + b;
const multiplicar = (a,b) => a * b;

// funciones como argumentos
const sumarOMultiplicar = fn => fn(10,20);

console.log(sumarOMultiplicar(suma));
console.log(sumarOMultiplicar(multiplicar));