//Multiplicación de dos números

const prompt = require("prompt-sync")({sigint:true});

let num1 = prompt("Please enter the first number: ");
let num2 = prompt("Now, enter the second number: ");

function multiply_numbers(){
    return num1*num2;
}

console.log("The product between the previous numbres is: ", multiply_numbers());