busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
});
busqueda.addEventListener('keyup', () => {
    console.log('Dejo de presionar...');
});

busqueda.addEventListener('blur', () => {
    console.log('salio del input...');
});

busqueda.addEventListener('copy', () => {
    console.log('Copiando...');
});

busqueda.addEventListener('paste', () => {
    console.log('Pegando...');
});

busqueda.addEventListener('cut', () => {
    console.log('Cortando...');
});

busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Fallo la validacion');
    };
    console.log(e.target.value);
});