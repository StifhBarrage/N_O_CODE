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
const producto4 = {
    nombre: "mouse",
    precio: 30
}

carrito.unshift(producto3);
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);


console.table(carrito);

// eliminar ultimo elemento de un arreglo
carrito.pop();
console.table(carrito);

//eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

//eliminar de cualquier parte del arreglo
carrito.splice(0,2); // (posicion, cantidad de elementos a eliminar)    
console.table(carrito);