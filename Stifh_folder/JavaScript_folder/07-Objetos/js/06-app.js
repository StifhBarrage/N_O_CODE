const producto6 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
        peso: '1kg',
        medida: '1m',
        fabrica: { 
            pais: 'China'
            }
        }
    }
}
const {informacion: {medidas: {fabrica}}} = producto6;
console.log(fabrica); // {pais: "China"}
const {fabrica: {pais}} = producto6.informacion.medidas;
console.log(pais); // China