// let i = 0;
// while (i < 1) {
//     console.log(i);
//     i++;
// }
//FizzBuzz with while loop


function fizzBuzzWhile(num) {    
   let j = 1;
    while (j <= num) {
        let output = "";
        if (j % 3 === 0) output = "Fizz";
        if (j % 5 === 0) output = "Buzz";
        if (j % 3 === 0 && j % 5 === 0) output = "FizzBuzz";
        console.log(output || j);
        j++;
    }
}
fizzBuzzWhile(100);