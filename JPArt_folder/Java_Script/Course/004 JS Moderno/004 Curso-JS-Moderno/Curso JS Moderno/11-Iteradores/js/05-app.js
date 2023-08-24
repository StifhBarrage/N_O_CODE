//Do While Loop

let i = 100; // Inicializa el iterador

do {
    console.log(`Numero: ${i}`);
    i++; // Incremento
} while (i < 10); // Condición

// Ejemplo 2 FIZZBUZZ
do {
    if (i%3 && i%5 === 0) {
        console.log(`${i} FIZZBUZZ!`);
    } else if (i%3 === 0) {
        console.log(`${i} fizz`);
    } else if (i%5 === 0) {
        console.log(`${i} buzz`);
    }
    i++; // Incremento
} while (i < 100); // Condición 

