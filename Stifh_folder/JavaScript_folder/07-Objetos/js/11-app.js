const producto11 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    
    }
}
producto101.mostrarInfo();

const producto11_2 = {
    nombre: "Tablet",
    precio: 200,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto11_2.mostrarInfo();
