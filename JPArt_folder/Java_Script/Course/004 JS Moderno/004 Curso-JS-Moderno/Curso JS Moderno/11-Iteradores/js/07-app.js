const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50},   
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Audifonos', precio: 200}
]

// For of

for (pendiente of pendientes) { // pendiente es el valor de cada elemento del arreglo
    console.log(pendiente);
}

for (producto of carrito) {
    console.log(producto.nombre);
}