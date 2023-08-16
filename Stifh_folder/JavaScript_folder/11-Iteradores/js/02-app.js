for (let i = 0; i < 4; i++) {
    if (i === 2) {
        console.log(`este es el numero ${i}`);
        continue;
    }
    console.log(i);
    
}

const carrito = [
    { nombre: 'screen', precio: 500 },
    { nombre: 'TV', precio: 200 },
    { nombre: 'tablet', precio: 100, descuento: true },
    { nombre: 'mouse', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`el articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
    
}