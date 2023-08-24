const autenticado = true;

// if(autenticado === true) = if(autenticado)

const puntaje = 450; //El ORDEN es importante

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente');
        return; //Detiene la ejecución del código
    } else if(puntaje > 300) {
        console.log('Buen puntaje');
        return; //Buena práctica de programación
    } else if(puntaje > 200) {
        console.log('Regular');
        return; // solo funciona dentro de funciones
    } else {
        console.log('No hay puntaje');
    }
}

revisarPuntaje();