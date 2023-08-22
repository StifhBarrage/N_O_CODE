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


carrito.push(producto); // Agrega el objeto producto al arreglo carrito
carrito.push(producto2); // Agrega el objeto producto2 al arreglo carrito

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

carrito.unshift(producto3); // Agrega el objeto producto3 al inicio del arreglo carrito



console.table(carrito); // Imprime el arreglo carrito