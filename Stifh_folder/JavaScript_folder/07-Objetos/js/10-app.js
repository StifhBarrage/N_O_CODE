const producto10 = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}
const medidas = {
    peso: '1kg',
    medida: '1m'
}
console.log(producto10)
console.log(medidas)
// Object.assign() - Unir dos objetos
const resultado = Object.assign(producto10, medidas);
console.log(resultado)
// Spread Operator o Rest Operator
const resultado2 = {...producto10, ...medidas};
console.log(resultado2);
