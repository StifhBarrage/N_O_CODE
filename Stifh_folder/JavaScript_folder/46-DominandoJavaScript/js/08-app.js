
self.onload = () => {
    console.log("Window Listo");
    
}

window.nombre = "Monitor 20 Pulgadas";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${self.nombre}`);
    }
}

console.log(producto.mostrarInfo());

