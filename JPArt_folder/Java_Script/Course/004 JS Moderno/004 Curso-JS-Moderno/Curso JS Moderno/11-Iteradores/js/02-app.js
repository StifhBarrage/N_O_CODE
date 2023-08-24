// Break y Continue en un For Loop

// for ( let i = 0; i < 10; i+=+) { 
//     if (i === 5) {
//         console.log('CINCO');
//         continue; // Salta a la siguiente iteración
//     }
//     console.log(`Numero: ${i}`);
// }

const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50, descuento: true},   
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Audifonos', precio: 200}
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) { //No es necesario poner === true
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    
    console.log(carrito[i].nombre);
}