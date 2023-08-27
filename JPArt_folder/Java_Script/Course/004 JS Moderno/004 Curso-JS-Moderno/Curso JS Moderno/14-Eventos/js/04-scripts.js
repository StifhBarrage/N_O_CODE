const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', validarFormulario);


function validarFormulario(e) {
    e.preventDefault(); //previene la acción por defecto del formulario para que no se envíe 
    console.log('consultar una api');
    console.log(e.target.action);

}