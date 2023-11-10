// Coerción de valores

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); // 2040 --> Coerción implícita (concatenó)

console.log(Number(numero2)); // 40 --> Coerción explícita (convirtió a número)
console.log(numero1.toString()); // "20" --> Coerción explícita (convirtió a string)



const pedido = [1, 2, 3, 4];
console.log(pedido); // [1, 2, 3, 4] --> Coerción implícita (convirtió a string)
console.log(pedido.toString()); // "1,2,3,4" --> Coerción explícita (convirtió a string)
console.log(JSON.stringify(pedido)); // "[1,2,3,4]" --> Coerción explícita (convirtió a string)
