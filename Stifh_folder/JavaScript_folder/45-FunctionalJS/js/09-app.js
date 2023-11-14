// currying y partials
// curring es una tecnica que nos permite crear funciones parciales

const suma = (a, b, c) => a + b + c;
console.log(suma(1, 2, 3)); // 6

const parcial = a => (b,c) => suma(a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(4, 3);

console.log(resultado); // 12


const parcial2 = a => b => c => suma(a, b, c);

const primerNumero2 = parcial2(5);
const segundoNumero2 = primerNumero2(4);
const resultado2 = segundoNumero2(3);
console.log(resultado2); // 12