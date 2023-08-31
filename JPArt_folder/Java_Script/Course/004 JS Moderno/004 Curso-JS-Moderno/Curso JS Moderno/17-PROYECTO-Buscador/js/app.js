const resultados = document.querySelector('#resultado');


// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});


// Funciones

function mostrarAutos(autos) {
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}

        `;

        // Insertar en el HTML
        resultados.appendChild(autoHTML);
    });
}
