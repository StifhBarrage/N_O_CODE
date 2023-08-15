const carrito = [
    { nombre: 'screen', precio: 500 },
    { nombre: 'TV', precio: 200 },
    { nombre: 'tablet', precio: 100 },
    { nombre: 'mouse', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

const nuevoArreglo = carrito.map(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})
const nuevoArreglo2 = carrito.forEach(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})
console.log(nuevoArreglo) // crea nuevo arreglo
console.log(nuevoArreglo2) //undefined no crea nuevo arreglo

