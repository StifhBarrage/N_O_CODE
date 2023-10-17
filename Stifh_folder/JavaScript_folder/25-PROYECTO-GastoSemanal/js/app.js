//////////// VARIABLES AND SELECTORS /////////////////////
const form = document.querySelector('#agregar-gasto');
const spendList = document.querySelector('#gastos ul');


//////////// EVENT LISTENERS /////////////////////
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', askBudget);
    form.addEventListener('submit', addSpend);

}



//////////// CLASSES /////////////////////////////

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.leftover = Number(budget);
        this.spends = [];
    }

    newSpend(spend) {
        this.spends = [...this.spends, spend];
        this.calculateLeftover();
    }

    calculateLeftover() {
        const spent = this.spends.reduce((total, spend) => total + spend.quantitySpend, 0);
        this.leftover = this.budget - spent;

        console.log(this.leftover);
    }
    deleteSpend(id) {
        this.spends = this.spends.filter(spend => spend.id !== id);
        this.calculateLeftover();
    }
}


class UI {

    insertarPresupuesto(cantidad) {
        // Extrayendo los valores
        const {budget, leftover} = cantidad;
        // Agregar al HTML
        document.querySelector('#total').textContent = budget;
        document.querySelector('#restante').textContent = leftover;
    }

    printMessage(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');
        if(type === 'error') {
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }
        divMessage.textContent = message;
        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMessage, form);
        // Quitar el mensaje
        setTimeout(() => {
            divMessage.remove();
        }, 2000);
    }

    addSpendList(spends) {

        // clear HTML
        this.clearHTML(); // this is the UI class
        
        // iterate spends
        spends.forEach(spend => {
            const {quantitySpend, nameSpend, id} = spend;

            // create li
            const newSpend = document.createElement('li');
            newSpend.className = 'list-group-item d-flex justify-content-between align-items-center';
            newSpend.dataset.id = id; // add id

            // add spend
            newSpend.innerHTML = `${nameSpend} <span class="badge badge-primary badge-pill"> $ ${quantitySpend} </span>`;

            // add button to delete
            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnDelete.innerHTML = 'Borrar &times;';
            btnDelete.onclick = () => {
                deleteSpend(id);
            }
            newSpend.appendChild(btnDelete);

            // add to HTML
            spendList.appendChild(newSpend);
        });
    }


    clearHTML() {
        while(spendList.firstChild) {
            spendList.removeChild(spendList.firstChild);
        }
    }

    updateLeftover(leftover) {
        document.querySelector('#restante').textContent = leftover;
    }

    checkBudget(budgetObj) {
        const {budget, leftover} = budgetObj;
        const leftoverDiv = document.querySelector('.restante');

        // check 25%
        if((budget / 4) > leftover) {

            leftoverDiv.classList.remove('alert-success', 'alert-warning');
            leftoverDiv.classList.add('alert-danger');

        // check 50% 
        } else if((budget / 2) > leftover) {
    
            leftoverDiv.classList.remove('alert-success');
            leftoverDiv.classList.add('alert-warning');
        } else {
            leftoverDiv.classList.remove('alert-danger', 'alert-warning');
            leftoverDiv.classList.add('alert-success');
        }

        if (leftover <= 0) {
            ui.printMessage('El presupuesto se ha agotado', 'error');
            form.querySelector('button[type="submit"]').disabled = true;
        }

    }

}
//////////// INSTANCES ///////////////////////////
const ui = new UI();
let budget;

//////////// FUNCTIONS ///////////////////////////

function askBudget() {
    const userBudget = prompt('¿Cuál es tu presupuesto semanal?');
    console.log(Number(userBudget));

    if(userBudget === '' || userBudget === null || isNaN(userBudget) || userBudget <= 0) {
        window.location.reload();
    }
    // valid budget
    budget = new Budget(userBudget);
    console.log(budget);

    ui.insertarPresupuesto(budget);
}

function addSpend(e) {
    e.preventDefault();
    // Read the form values
    const nameSpend = document.querySelector('#gasto').value;
    const quantitySpend = Number(document.querySelector('#cantidad').value);

    // Validate
    if(nameSpend === '' || quantitySpend === '') {
        ui.printMessage('Hubo un error', 'error');
        return;

    } else if (quantitySpend <= 0 || isNaN(quantitySpend)) {
        ui.printMessage('Cantidad no válida', 'error');
        return;
    }

    // Generate an object with the spend
    const spend = {nameSpend, quantitySpend, id: Date.now()};

    // Add a new spend
    budget.newSpend(spend);
    ui.printMessage('Agregado correctamente');

    // print spends
    const {spends, leftover} = budget;
    ui.addSpendList(spends);
    ui.updateLeftover(leftover);
    ui.checkBudget(budget);

    // reset form
    form.reset();



}

function deleteSpend(id) {
    // delete from object
    budget.deleteSpend(id);

    // delete from HTML
    const {spends, leftover} = budget;
    ui.addSpendList(spends);
    ui.updateLeftover(leftover);
    ui.checkBudget(budget);
}