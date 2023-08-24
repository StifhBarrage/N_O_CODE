const puntaje = 1000;

// Operador de comparación
if (puntaje == '1000') {
    console.log('Sí es igual');
} else {
    console.log('No es igual');
}

//Operador estricto 
if (puntaje === '1000') {
    console.log('Sí es igual');
} else {
    console.log('No es igual');
}


//Diferente a 
if (puntaje != '1000') {
    console.log('Es diferente');
} else {
    console.log('No es difrente');
}

//Diferente a estricto -> es igual que usando un igual
if (puntaje !== 1000) {
    console.log('Es diferente');
} else {
    console.log('No es diferente');
}

//=== Operador de comparación estricto
//== Operador de comparación no estricto