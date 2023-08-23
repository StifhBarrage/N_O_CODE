const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`); // Colocar this.nombre y this.precio para que funcione dentro del objeto
    }
}

const producto2 = {
    nombre: 'Tablet',
    precio: 500,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`); // Colocar this.nombre y this.precio para que funcione dentro del objeto
    }
}

producto.mostrarInfo(); // Llama a la función mostrarInfo() dentro del objeto producto
producto2.mostrarInfo(); // Llama a la función mostrarInfo() dentro del objeto producto2