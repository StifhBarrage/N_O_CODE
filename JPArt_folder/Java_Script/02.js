//Gretting program

const prompt = require("prompt-sync")({sigint:true});
console.log("Hello World");
console.log("This is a test of an input in js");
var name = prompt("Please enter your first name: ");
var last_name = prompt("Please enter your last name: ");

console.log("Nice to meet you,",name,last_name);
