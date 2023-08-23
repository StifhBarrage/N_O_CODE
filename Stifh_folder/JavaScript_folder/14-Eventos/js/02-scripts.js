const nav = document.querySelector('.navegacion');

// registrar un event

nav.addEventListener('click', () => {
    console.log('click en nav');

});

nav.addEventListener('mouseenter', () => {
    console.log('Entrando a la navegacion');
    nav.style.backgroundColor = '#8c72fffc';
});

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mousedown', () => {
    console.log('Presionando la navegacion');
    nav.style.backgroundColor = 'red';

})

nav.addEventListener('mouseup', () => {
    console.log('Soltando la navegacion');
    nav.style.backgroundColor = 'green';
});

nav.addEventListener('dblclick', () => {
    console.log('Doble click');
    nav.style.backgroundColor = 'yellow';
});