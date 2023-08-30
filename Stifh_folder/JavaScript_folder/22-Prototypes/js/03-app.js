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
}

Client.prototype.clientNameBalance = function() {
    return `Name: ${this.name}, 
            Balance: ${this.balance}, 
            Category: ${this.category}`;
}

Client.prototype.retireBalance = function(retire) {
    this.balance -= retire;
}

Company.prototype.typeClient = Client.prototype.typeClient;

// instantiate it
const pedro = new Client('Pedro', 600);
console.log(pedro.tipoCliente());
console.log(pedro.clientNameBalance());
pedro.retireBalance(300);

console.log(pedro);

