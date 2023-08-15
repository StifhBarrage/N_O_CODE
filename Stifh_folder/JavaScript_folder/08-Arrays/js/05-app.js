const carrito = [];
const producto = {
    nombre: "Screen TV",
    precio: 400
}

const producto2 = {
    nombre: "phone",
    precio: 800
}
const producto3 = {
    nombre: "keyboard",
    precio: 50
}
carrito.push(producto);
carrito.push(producto2);
//agregar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);