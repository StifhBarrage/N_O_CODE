// For loop

// for ( let i = 0; i < 10; i+=2) { 
//     console.log(`Numero: ${i}`);
// }

// ++ incrementa de 1 en 1
// -- decrementa de 1 en 1
// +=2 incrementa de 2 en 2
// -=2 decrementa de 2 en 2

// Números pares e impares
// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El número ${i} es impar`);
//     }
// }


const carrito = [
    {nombre: 'Monitor 32 pulgadas', precio: 400},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Teclado', precio: 50},   
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Monitor 20 pulgadas', precio: 300},
    {nombre: 'Audifonos', precio: 200}
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre); // Imprime el nombre de cada objeto del arreglo carrito
}

console.log(carrito.length); // 6