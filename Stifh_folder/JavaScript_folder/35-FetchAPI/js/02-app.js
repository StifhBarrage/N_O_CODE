const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json'
    fetch(url)
        .then ( respuesta => {
            return respuesta.json();
        })
        .then (resultado => {
            console.log(resultado);
            mostrarHtml(resultado);
        })
    }


function mostrarHtml({nombre, empresa, trabajo}) {
    const contenido = document.querySelector('.contenido');
    contenido.innerHTML = `
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}