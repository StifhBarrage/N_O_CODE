let j = 1;
do {
    let output = "";
    if (j % 3 === 0) output = "Fizz";
    if (j % 5 === 0) output = "Buzz";
    if (j % 3 === 0 && j % 5 === 0) output = "FizzBuzz";
    console.log(output || j);
    j++;
} while (j<=15);