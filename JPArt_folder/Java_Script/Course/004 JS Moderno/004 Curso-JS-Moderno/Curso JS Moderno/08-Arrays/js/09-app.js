const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50},   
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Audifonos', precio: 200}
]

//Recorrer un array
for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`); // Imprime cada uno de los elementos del arreglo meses
}   // Imprime Enero, Febrero, Marzo, Abril, Mayo

//ForEach - Recorre un arreglo
carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - ${producto.precio}`);
})