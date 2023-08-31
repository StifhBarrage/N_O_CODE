class Client{

    #name; // private atribute

    // setter and getter
    setName(name){
        this.#name = name;
    }
    getName(){
        return this.#name;
    }

};

const juan = new Client('juan', 400);
juan.setName('Juan');
console.log(juan.getName());