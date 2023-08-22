const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);
console.log(encabezado.innerText); // Get the text but not if - visibility: hidden
console.log(encabezado.textContent); // Get the text
console.log(encabezado.innerHTML); // Get the text and the HTML tags

document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';

const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';

