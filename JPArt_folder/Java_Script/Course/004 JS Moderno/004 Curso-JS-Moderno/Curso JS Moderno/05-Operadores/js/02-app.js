const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si dos numeros son iguales
console.log(numero1 == numero3);
console.log(numero1 == numero2); //true, no se fija en el tipo de dato


//Revisar si dos numeros son iguales pero estrictamente
console.log(numero1 === numero2); //false, se fija en el tipo de dato
console.log(typeof numero1); //number
console.log(typeof numero2); //string

console.log(numero1 === parseInt(numero2)); //true, se fija en el tipo de dato

//Diferente a...
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); //false, no se fija en el tipo de dato
console.log(numero1 !== numero2); //true, se fija en el tipo de dato
console.log(password1 !== password2); //true, se fija en el tipo de dato