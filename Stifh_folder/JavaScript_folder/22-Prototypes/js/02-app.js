// class client
function Client(name, balance) {
    this.name = name;
    this.balance = balance;
}

// class company
function Company(name, balance, category) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

// function to format client
function formatClient(client) {
    const { name, balance } = client;
    return `The client ${name} has a balance of $${balance}`;
}
console.log(formatClient(juan));

// function to format company
function formatCompany(company) {
    const { name, balance, category } = company;
    return `The company ${name} 
    has a balance of $${balance} 
    and belongs to the category ${category}`;
}


// juan instance of Client 
const juan = new Client('Juan', 500);

// CCJ instance of Company
const CCJ = new Company('my company', 4000, 'Education');
// use the same function to format a company as a client
console.log(formatClient(CCJ))



