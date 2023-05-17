//Multiplicación de dos números

const prompt = require("prompt-sync")({sigint:true});

console.log("--------------------------------------------------\nHi, this a program that allows you to multiply two numbers \n");
let num1 = prompt("Please enter the first number: ");
let num2 = prompt("Now, enter the second number: ");

function multiply_numbers(){
    return num1*num2;
}

console.log("\nThe product between the previous numbres is: ", multiply_numbers());
