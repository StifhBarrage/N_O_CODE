const carrito = [];

//Definit un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}   

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto4 = {
    nombre: 'Mouse',
    precio: 40
}

carrito.push(producto); // Agrega el objeto producto al arreglo carrito
carrito.push(producto2); // Agrega el objeto producto2 al arreglo carrito

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3); // Agrega el objeto producto3 al inicio del arreglo carrito


// //Eliminar ultimo elemento de un arreglo
// carrito.pop();

// //Eliminar del inicio del arreglo
// carrito.shift();

carrito.splice(1, 2); // el segundo número indica cuantos elementos se eliminarán a partir de la posición 1 (primer número)
console.table(carrito); // Imprime el arreglo carrito 

