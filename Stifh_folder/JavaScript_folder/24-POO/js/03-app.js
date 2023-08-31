class Client{

    // Properties
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    // Methods
    showInfo(){
        return `
        Client: ${this.name},
        Balance: ${this.balance}`;
    }

    // Static methods
    static welcome(){
        return `Welcome to the ATM`;
    }
};

// Inheritance
class Company extends Client{
    constructor(name, balance, phone, category){
        // Super() is used to call the constructor of the parent class
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }
    // Overwrite the parent class method
    static welcome(){
        return `Welcome to the company ATM`;
    }
};

const juan = new Client('juan', 400);
console.log(juan);
const company = new Company('Company', 1000, 123456, 'Learning');
console.log(company);

console.log(company.showInfo());
console.log(Company.welcome());
