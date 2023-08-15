const carrito = [
    { nombre: 'screen', precio: 500 },
    { nombre: 'TV', precio: 200 },
    { nombre: 'tablet', precio: 100 },
    { nombre: 'mouse', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
];

const nuevoArreglo = carrito.map(producto => {
    return `${producto.nombre} - ${producto.precio}`
})
carrito.forEach(producto => {
    console.log(`${producto.nombre} - ${producto.precio}`)
})

console.log(nuevoArreglo) // crea nuevo arreglo


