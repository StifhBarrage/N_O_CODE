// remplazar un valor de un string
const producto05_1 = 'Monitor 20 pulgadas';
console.log(producto05_1);
console.log(producto05_1.replace('pulgadas', '"'));
console.log(producto05_1.replace('Monitor', 'Monitor Curvo'));
// cortar strings
console.log(producto05_1.slice(0, 10));
console.log(producto05_1.slice(8));
// si el primer valor es mayor al segundo, no va a funcionar
console.log(producto05_1.slice(2, 1));
// alternativa a slice
console.log(producto05_1.substring(0, 10));
console.log(producto05_1.substring(2, 1));

const usuario05_1 = 'Juan';
console.log(usuario05_1.substring(0, 1));
console.log(usuario05_1.charAt(0));
