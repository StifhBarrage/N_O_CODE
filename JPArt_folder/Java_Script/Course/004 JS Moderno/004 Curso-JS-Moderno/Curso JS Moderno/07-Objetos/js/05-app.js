// Objeto dentro de otro objeto
const producto1 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    imagen : 'imagen.jpg',
    información : { // Objeto dentro de otro objeto
        medidas : '1m',
        peso : '1Kg',
        datos : {       // Objeto dentro de otro objeto dentro de otro objeto
            altura : '1m',
            ancho : '50cm'
        }
    }
}


// Acceder a los valores de un objeto dentro de otro objeto

console.log(producto1.información.datos.altura);