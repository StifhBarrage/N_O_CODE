const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50},   
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Audifonos', precio: 200}
]


//ForEach - Recorre un arreglo
const arreglo1 = carrito.forEach(function(producto) {
    return `${producto.nombre} - ${producto.precio}`;
})

//Map - Crea un nuevo arreglo con los resultados
const arreglo2 = carrito.map(function(producto) {
    return `${producto.nombre} - ${producto.precio}`;
})

//CON ARROW FUNCTIONS

//ForEach - Recorre un arreglo
const arreglo3 = carrito.forEach( producto => `${producto.nombre} - ${producto.precio}`);

//Map - Crea un nuevo arreglo con los resultados
const arreglo4 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);