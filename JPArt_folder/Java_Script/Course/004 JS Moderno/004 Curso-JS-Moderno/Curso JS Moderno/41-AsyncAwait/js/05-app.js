// Async Await con Fetch API

const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);


// function obtenerDatos() {
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => mostrarHTML(resultado))
//         .catch(error => console.log(error));
//     }



// Mejor performance (muy utilizado en react y ángular)

async function obtenerDatos() {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }

}