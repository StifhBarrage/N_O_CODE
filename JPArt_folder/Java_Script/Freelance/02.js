//Gretting program

const prompt = require("prompt-sync")({sigint:true});
console.log("---------------------------------------\nHi, this is a gretting program\nThis is a test of an input in js too\n");
var name = prompt("Please enter your first name: ");
var last_name = prompt("Please enter your last name: ");

console.log("\nNice to meet you,",name,last_name);
