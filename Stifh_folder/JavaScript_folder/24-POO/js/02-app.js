class Client{

    // Properties
    constructor(){
        this.name = 'Juan';
        this.balance = 500;
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

const juan = new Client();
console.log(juan);
console.log(juan.showInfo());
console.log(Client.welcome());
