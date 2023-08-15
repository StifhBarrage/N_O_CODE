// object literal
const producto10 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    
    }
}
// Object constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible === undefined ? true : disponible;   
}
const producto2 = new Producto('monitor 24 pulgadas',500)
console.log(producto2)
const producto3 = new Producto('TV',100, false)
console.log(producto3)