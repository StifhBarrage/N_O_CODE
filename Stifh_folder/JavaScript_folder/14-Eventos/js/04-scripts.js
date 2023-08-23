const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);

function validarFormulario (e) {
    e.preventDefault();
    console.log('consultar api...');
    console.log(e.target.method);
    console.log(e.target.action);
}
