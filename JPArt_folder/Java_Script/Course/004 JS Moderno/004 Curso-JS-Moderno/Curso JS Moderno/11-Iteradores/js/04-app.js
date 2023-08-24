let i = 0; // Inicializa el iterador

while (i < 10) { // Condición
    console.log(`Numero: ${i}`);
    i++; // Incremento
}   // 0 1 2 3 4 5 6 7 8 9


// Ejemplo 2 FIZZBUZZ
while (i < 100) { // Condición
    if (i%3 && i%5 === 0) {
        console.log(`${i} FIZZBUZZ!`);
    } else if (i%3 === 0) {
        console.log(`${i} fizz`);
    } else if (i%5 === 0) {
        console.log(`${i} buzz`);
    }
    i++; // Incremento
} 

// Pares e impares

while (i < 120) { // Condición
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
    i++; // Incremento
}   