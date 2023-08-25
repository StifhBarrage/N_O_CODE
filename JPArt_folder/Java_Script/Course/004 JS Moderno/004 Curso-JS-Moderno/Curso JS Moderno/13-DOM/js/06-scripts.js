const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// console.log(encabezado.innerText); // Devuelve el texto (no encuentra el texto oculto) --> visibility: hidden;  (CSS)
// console.log(encabezado.textContent); // Devuelve el texto 
// console.log(encabezado.innerHTML); // Devuelve el HTML

// const encabezado2 = document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';