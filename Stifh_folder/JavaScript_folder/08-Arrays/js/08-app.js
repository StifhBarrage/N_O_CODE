const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
const {nombre} = producto;
console.log(nombre);

//Destructuring con arreglos
const num = [10,20,30,40,50];
const [primero, segundo, tercero] = num;

// primero = nombre de la variable
// 10 = valor de la variable
console.log(primero); // 10
console.log(segundo); // 20
console.log(tercero); // 30
const [,,,, ultimo] = num; // 50
const [prim, seg, ...ter] = num; // 10, 20, [30, 40, 50]
console.log(ter); // [30, 40, 50]

