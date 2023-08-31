class Client{
    constructor(){
        this.name = 'Juan';
        this.balance = 500;
    }
};

const Client2 = class{
    constructor(){
        this.name = 'Juan';
        this.balance = 500;
    }
}

const juan = new Client();
console.log(juan);

const juan2 = new Client2();
console.log(juan2);
