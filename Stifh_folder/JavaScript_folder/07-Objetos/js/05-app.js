const producto5 = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    },
    fabricacion: {
        pais: 'China'
    }
}

const {medida} = producto5.informacion;
console.log(medida); // 1md
const {pais} = producto5.fabricacion;
console.log(pais); // China
const {nombre, precio, informacion, fabricacion} = producto5;
console.log(nombre, precio, informacion, fabricacion);
