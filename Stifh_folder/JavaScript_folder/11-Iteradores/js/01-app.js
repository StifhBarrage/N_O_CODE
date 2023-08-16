for (let i = 0; i <= 2; i++) {
    console.log(`Numero: ${i}`)
}

for (let i = 0; i <= 2; i++) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
}

const carrito = [
    { nombre: 'screen', precio: 500 },
    { nombre: 'TV', precio: 200 },
    { nombre: 'tablet', precio: 100 },
    { nombre: 'mouse', precio: 300 },
    { nombre: 'teclado', precio: 400 },
    { nombre: 'celular', precio: 700 },
]
console.log(carrito.length)

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre)   
}
