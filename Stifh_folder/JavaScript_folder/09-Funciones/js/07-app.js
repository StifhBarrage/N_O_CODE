function saludar2(
    nombre = 'Desconocido', 
    apellido = 'sin apellido'){

    console.log(`Hola ${nombre} ${apellido}`)
}
saludar2();

iniciarApp();
function iniciarApp(){
    console.log('Iniciando app...');
    segundaFunction();

}

function segundaFunction(){
    console.log('Desde la segunda funcion')
    usuarioAutenticado('Pablo');

}

function usuarioAutenticado(usuario){
    console.log('Autenticando usuario...')
    console.log(`Usuario autenticado exitosamente: ${usuario}`)
}

