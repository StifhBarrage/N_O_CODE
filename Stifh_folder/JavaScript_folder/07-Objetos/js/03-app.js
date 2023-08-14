const producto3 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
producto3.imagen = "imagen.jpg";
delete producto3.disponible;

console.log(producto3);