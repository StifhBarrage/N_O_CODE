const producto = 'Monitor de 20 pulgadas'
// .replace para reemplazar
console.log(producto.replace('pulgadas', '"'))
console.log(producto.replace('Monitor', 'Monitor Curvo'))

// .slice para cortar
console.log(producto.slice(0, 10))
console.log(producto.slice(8))
console.log(producto.slice(2, 1)) // no hace nada

// alternativa a slice
console.log(producto.substring(0, 10))
console.log(producto.substring(2, 1)) // intercambia los valores

const usuario = 'Juan'
console.log(usuario.substring(0, 1))