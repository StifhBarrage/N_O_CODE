const producto7 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
producto7.disponible = false;
delete producto7.precio;
console.log(producto7)
