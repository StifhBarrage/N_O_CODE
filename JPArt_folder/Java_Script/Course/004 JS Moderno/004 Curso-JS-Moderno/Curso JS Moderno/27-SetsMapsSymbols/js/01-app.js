const carrito = new Set();

carrito.add('camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Camisa'); // Los duplicados no se toman y no importan las mayúsculas/minúsculas

// Algunos métodos
console.log(carrito.has('camisa')); // retorna true si existe el elemento
console.log(carrito.size); // retorna número de elementos
carrito.delete('Disco #3'); // Elimina el elemento
// carrito.clear(); // Elimina todos los elementos


// Iterar sobre los elementos del Set
carrito.forEach( (producto, index) => {
    console.log(`${index} : ${producto}`);
});

// console.log(carrito);


// OJO NO ALMACENA DUPLICADOS Y SON ITERABLES

// Ejemplo: Del siguiente arreglo, eliminar los duplicados
const numeros = [10,20,30,40,50,10,20];
const numerosSet = new Set(numeros);

console.log(numerosSet); // Elimina los duplicados