function sumar(a,b){
    console.log(a + b)
}
sumar(2,3)
function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`)
}
saludar('Juan', 'Perez')


function saludar2(
    nombre = 'Desconocido', 
    apellido = 'sin apellido'){
    console.log(`Hola ${nombre} ${apellido}`)
}
saludar2();