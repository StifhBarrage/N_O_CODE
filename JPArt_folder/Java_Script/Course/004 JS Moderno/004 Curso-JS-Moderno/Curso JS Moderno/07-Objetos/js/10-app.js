const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}


console.log(producto);
console.log(medidas);

// Unir dos objetos
const resultado = Object.assign(producto, medidas); // Une los objetos en uno solo

// Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas }; // Une los objetos en uno solo


console.log(resultado);
console.log(resultado2);
