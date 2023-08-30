const client = {
    name: 'Juan',
    balance: 500
}

console.log(client);
console.log(typeof client);

// Object Constructor
function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

const juan = new Client('Juan', 500);
console.log(juan);

// advantages using object constructor
/*
    1. You can create multiple objects 
    with the same structure
    2. You can reuse the code
    3. You can add new properties or methods

*/

