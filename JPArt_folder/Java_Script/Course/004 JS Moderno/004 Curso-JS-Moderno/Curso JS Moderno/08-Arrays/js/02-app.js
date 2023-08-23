const numeros = [10, 20, 30, 40, 50, [1, 2, 3]];


console.log(numeros); // Imprime el arreglo numeros
console.table(numeros); // Imprime el arreglo numeros en forma de tabla

// Acceder a los valores de un arreglo
console.log(numeros[2]); // Imprime el valor 50 del arreglo numeros
console.log(numeros[0]); // Imprime el valor 10 del arreglo numeros
console.log(numeros[20]); // Imprime undefined porque no existe el índice 20 en el arreglo numeros
console.log(numeros[5][1]); // Imprime el valor 2 del arreglo numeros