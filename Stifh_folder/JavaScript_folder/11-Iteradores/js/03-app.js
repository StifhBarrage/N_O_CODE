// fizzBuzz
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let output = "";
        if (i % 3 === 0) output = "fizz";
        if (i % 5 === 0) output = "buzz";
        if (i % 5 === 0 && i % 3 === 0) output = "fizzbuzz";
        console.log(output || i);
    }
    }
fizzBuzz(20)