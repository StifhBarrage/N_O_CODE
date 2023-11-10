// Self --> Ventana Global

self.onload = () => {
    console.log('Ventana cargada')
}


window.nombre = 'Monitor 20 Pulgadas';

const producto = {

    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        return `El producto: ${self.nombre} tiene un precio de: ${this.precio}`
    }
}

console.log(producto.mostrarInfo());