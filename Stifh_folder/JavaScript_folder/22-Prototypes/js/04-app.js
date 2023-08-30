// CLASSES 
function Client (name, balance) {
    this.name = name;
    this.balance = balance;
}
function Company(name, balance, category) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

// PROTOTYPES

// Create a prototype if Client
Client.prototype.typeClient = function(){
    let type;
    if (this.balance > 10000) {
        type = 'Gold';
    } else if (this.balance > 5000) {
        type = 'Platinum';
    } else {
        type = 'Normal';
    }
    return type;

}
Client.prototype.clientNameBalance = function() {
    return `Name: ${this.name}, 
Balance: ${this.balance}, 
Type Client: ${this.typeClient()}`;
}
Client.prototype.retireBalance = function(retire) {
    this.balance -= retire;
}

function Person(name, balance, phone) {
    Client.call(this, name, balance);
    this.phone = phone;
}

Person.prototype = Object.create(Client.prototype);

Person.prototype.ShowPhone = function() {
    return `Phone: ${this.phone}`;
}
// instantiate it
const john = new Person('John', 1000, 123456789);
console.log(john);

console.log(`${john.clientNameBalance()} \n${john.ShowPhone()}`);


