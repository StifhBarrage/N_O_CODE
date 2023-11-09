const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

async function obtenerDatos() {
    try {
        const resultado = await fetch(url);
        const datos = await resultado.json();
        console.log(datos);
        mostrarHTML(datos);

    } catch (error) {

        console.log(error);

    }
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach(perfil => {
        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
        `;
    });

    contenido.innerHTML = html;
}