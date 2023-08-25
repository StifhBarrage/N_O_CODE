const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);


function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) { //verifica si está o no está la clase
        footer.classList.remove('activo'); //remueve la clase si está activa
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}