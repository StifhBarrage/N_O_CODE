const num02_1 = 20;
const num02_2 = "20";
const num02_3 = 30;

// operador de igualdad ==
console.log(num02_1 == num02_2); // true
console.log(num02_1 == num02_1); // true

// operador  de igualdad estricto ===
console.log(num02_1 === num02_2); // false
console.log(num02_1 === num02_1); // true
console.log(num02_1 === parseInt(num02_2)); // true

// operador de desigualdad !=
const password = "admin";
const password2 = "Admin";
console.log(password != password2); // true
console.log(password !== password2); // true
console.log(num02_1 != num02_2); // false
console.log(num02_1 !== num02_2); // true


