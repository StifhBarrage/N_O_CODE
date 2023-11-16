// coercion de tipo en JavaScript

const numero1 = 20;
const numero2 = "20";

console.log(numero1 + numero2); // 2020 - implicita 


console.log(Number(numero2)); // 20 - explicita


const pedido = [1, 2, 3, 4];
console.log(pedido.toString()) // 1,2,3,4 - explicita
console.log(JSON.stringify(pedido)) // "[1,2,3,4]" - explicita
