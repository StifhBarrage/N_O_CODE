const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
]

const pendientes = [
    'Tarea', 
    'Comer', 
    'Proyecto', 
    'Estudiar JavaScript'
];

for (const pendiente of pendientes) {
    console.log(pendiente);
}
for (const producto of carrito) {
    console.log(producto.nombre);
}