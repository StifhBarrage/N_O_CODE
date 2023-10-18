const carrito = new Set();
console.log(carrito);


// Agregar elementos al set
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
console.log(carrito);

carrito.forEach((producto, index, completo ) => {
    console.log(index);
    console.log(producto);
    console.log(`${index} : ${producto}`);
    console.log(completo)
});


// cuanto mide
console.log(carrito.size);


// Comprobar que un valor exista en el set
console.log(carrito.has('Camisa'));
console.log(carrito.has('Guitarra'));

// Eliminar algo del set
carrito.delete('Camisa');
console.log(carrito);

// Limpiar el set
carrito.clear();
console.log(carrito);

// convertir arrays a sets

const nums = [10,20,30,40,50,10,20]; 
const numeros = new Set(nums);
console.log(numeros);



