const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}   

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}


let resultado;
resultado = [...carrito, producto]; // Agrega el objeto producto al arreglo carrito
resultado = [...resultado, producto2]; // Agrega el objeto producto2 al arreglo resultado
resultado = [producto3, ...resultado]; // Agrega el objeto producto3 al inicio del arreglo resultado

// console.table(carrito); // Imprime el arreglo carrito
console.table(resultado); // Imprime el arreglo resultado