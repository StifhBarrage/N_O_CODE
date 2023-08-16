const autenticado =  true;
if (autenticado) {
    console.log('el usuario esta autenticado')
}

const puntaje = 500;

function revisarPuntaje(){
    if (puntaje > 300){
        console.log('buen puntaje... felicidades');
        return;
    }
    if (puntaje > 400){
        console.log('excelente puntaje');
        return;
    }
}
revisarPuntaje();