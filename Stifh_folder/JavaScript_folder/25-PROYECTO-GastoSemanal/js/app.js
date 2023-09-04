//////////// VARIABLES AND SELECTORS /////////////////////
const form = document.querySelector('#agregar-gasto');
const spendingList = document.querySelector('#gastos ul');





////////////// EVENTS LISTENERS //////////////////////////
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', askBudget);

    form.addEventListener('submit', addSpending);
}



////////////////////// CLASSES //////////////////////////
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.remaining = Number(budget);
        this.spending = [];
    }

    newSpending(spending) {
        this.spending = [...this.spending, spending];
        console.log(this.spending);
    }

    remainingBudget(spending = 0) {
        return this.remaining -= Number(spending);
    }

}

class UI {

    insertBudget(amount) {
        const {budget, remaining} = amount;
        document.querySelector('#total').textContent = budget;
        document.querySelector('#restante').textContent = remaining;
    }

    printAlert(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert');

        if (type === 'error') {
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }

        divMessage.textContent = message;
        document.querySelector('.primario').insertBefore(divMessage, form);

        setTimeout(() => {
            divMessage.remove();
        }, 3000);
    }
}

const ui = new UI();
let budget;

//////////////////// FUNCTIONS //////////////////////////
function askBudget() {
    const budgetUser = prompt('¿Cuál es tu presupuesto semanal?');
    if (budgetUser === '' || 
    budgetUser === null || 
    isNaN(budgetUser) || 
    budgetUser <= 0) {

        window.location.reload();

    }
    console.log(budgetUser);

    budget = new Budget(budgetUser);
    console.log(budget);

    ui.insertBudget(budget);

}


// function addSpending(e) {
//     e.preventDefault();
//     const name = document.querySelector('#gasto').value;
//     const amount = document.querySelector('#cantidad').value;
    
//     // Validate fields
//     if (name === '' || amount === '') {
//         ui.printAlert('Ambos campos son obligatorios', 'error');
//         return;
//     } else if (amount <= 0 || isNaN(amount)) {
//         ui.printAlert('Cantidad no válida', 'error');
//         return;
//     }

//     // Add to object
//     const spending = {name, amount, id: Date.now()};
//     budget.newSpending(spending);
//     ui.printAlert('Gasto agregado correctamente');
//     // Print spending
//     const {spending} = budget;
//     addSpendingList(spending);
//     // Update remaining
//     form.reset();

// }