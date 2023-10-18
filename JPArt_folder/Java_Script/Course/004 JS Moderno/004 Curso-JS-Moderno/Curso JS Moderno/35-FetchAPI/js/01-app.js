// Cargar un archivo de texto

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    const url = 'data/datos.txt'; // ruta del archivo

    fetch(url) // hacemos la consulta
        .then( respuesta => { // obtenemos la respuesta
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);
            console.log(respuesta.text());
            return respuesta.text();
        })
        .then( datos => { // obtenemos los datos
            console.log(datos);

        })
        .catch( error => { // en caso de error
            console.log(error);
        });

}