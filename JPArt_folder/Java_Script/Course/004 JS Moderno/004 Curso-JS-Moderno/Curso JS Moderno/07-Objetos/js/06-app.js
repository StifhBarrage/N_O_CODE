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


// Destrucuring de un objeto dentro de otro objeto

// const {nombre, información.medidas.datos.altura} = producto1; // No funciona
const {nombre, información, información : {medidas, datos : {altura}}} = producto1; // Sí funciona

console.log(nombre);
console.log(altura); //accede únicamente a la altura, si queremos acceder a información, tendríamos agregarlo arriba con coma.
console.log(información);


