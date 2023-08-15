const carrito = [
    { nombre: 'screen', precio: 500 },
    { nombre: 'TV', precio: 200 },
    { nombre: 'tablet', precio: 100 },
    { nombre: 'mouse', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`)
}
carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`)

})