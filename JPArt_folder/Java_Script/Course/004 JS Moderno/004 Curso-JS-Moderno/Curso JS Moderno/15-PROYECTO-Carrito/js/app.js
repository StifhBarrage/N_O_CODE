// Variables 

const carro = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();


function cargarEventListeners() {
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carro.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    // Al cargar el documento, mostrar LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


// Funciones 

function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);


    }
}

// Leer el contenido HTML del botón presionado y mostrarlo en el carrito
function leerDatosCurso(curso) {
    console.log(curso);

    // Crear obejto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        // id: curso.querySelector('a').getAttribute('data-id'),
        id: curso.querySelector('a').dataset.id,
        cantidad: 1
    }

    //Agrega elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();

}

// Muestra el carrito de compras en el HTML

function carritoHTML() {
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr'); // crea un elemento HTML en la tabla
        row.innerHTML = `
            <td> 
            ${curso.titulo} 
            </td>
        `;

        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

}
