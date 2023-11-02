// Partial y Currying

const suma = (a, b, c) => a + b + c; // Currying
console.log(suma(1, 2, 3));



// Partial dividido en 2 partes
const parcial = a => (b,c) => a + b + c; // Partial divide la funcion en partes

const primerNumero = parcial(5); // 5
const resultado = primerNumero(4,1); // 9

console.log(resultado);




// Partial dividido en 3 partes
const parcial2 = a => b => c => a + b + c;
const resultadoParcial2 = parcial2(5)(4)(3); // 12

console.log(resultadoParcial2);