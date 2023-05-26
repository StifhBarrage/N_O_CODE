const prompt = require("prompt-sync")({sigint:true});

/*Ifelse in js
var name = prompt("Please enter your name: ");
var age = prompt("Hi"+name+"Please enter your age: ");
if (age >= 18) {
    console.log("\nCongrats, you can go inside");
  } else {
    console.log("\nSorry, you can't go inside");
  }
console.log("\n---------------------------------------\n");
*/


//Average of 3 numbers
var num1 = prompt("Please enter your first qualification, this will be multiplied by 0.2: ");
var num2 = prompt("Please enter your second qualification, this will be multiplied by 0.3: ");
var num3 = prompt("Please enter your third qualification, this will be multiplied by 0.5: ");
var average = (num1*0.2)+(num2*0.3)+(num3*0.5);
if (average >= 30 && average <= 40) {
    console.log("\nCongrats, you got a good qualification");
    } else if (average >= 40.1 && average <= 50) {
    console.log("\nYou got an excellent qualification");
    } else if (average >0 && average <= 29.9) {
    console.log("\nSorry, you got a bad qualification");
    }else{
    console.log("\nSorry, you entered a wrong qualification");
    }
console.log("\nYour average is: ",average);
console.log("\n---------------------------------------\n");