
// Constructor for insurance
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// quoting the insurance

Insurance.prototype.quoteInsurance = function() {
    /*
        1 = American 1.15
        2 = Asian 1.05
        3 = European 1.35
    */
    let quantity;
    const base = 2000;

   console.log(this.brand);
   switch (this.brand) {
    case '1':
        quantity = base * 1.15;
        break;
    case '2':
        quantity = base * 1.05;
        break;
    case '3':
        quantity = base * 1.35;
        break;
    default:
        break;
   }
   // Read the year
    const difference = new Date().getFullYear() - this.year;
    // Each year of difference we have to reduce 3% the value of the insurance
    quantity -= ((difference * 3) * quantity) / 100;


    /*
        If the insurance is basic, it is going to increase 30%
        If the insurance is complete, it is going to increase 50%
    */
    if (this.type === 'basico') {
        quantity *= 1.30;
    } else {
        quantity *= 1.50;
    }
    return quantity;
}


//Class for everything that is shown
function UI() {}

// Fill the options of the year
UI.prototype.fillYears = () => {
    const max = new Date().getFullYear(),
    min = max - 20; // 20 years ago
    const selectYear = document.querySelector('#year');
    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

UI.prototype.showAlert = (message, type) => {
    const div = document.createElement('div');
    if (type === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correct');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = message;

    // Insert in HTML
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
        div.remove();
    }
    , 3000);
}

UI.prototype.showResult = (total, insurance) => {
    const {brand, year, type} = insurance;
    let textBrand;
    switch (brand) {
        case '1':
            textBrand = 'American';
            break;
        case '2':
            textBrand = 'Asian';
            break;
        case '3':
            textBrand = 'European';
            break;
        default:
            break;
    }
    // Create the result
    const div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Summary</p>
        <p class="font-bold">Brand: <span class="font-normal">${textBrand}</span></p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Type: <span class="font-normal capitalize">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;
    const resultDiv = document.querySelector('#resultado');
    // Show spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        resultDiv.appendChild(div);
    }, 3000);
}




// instantiate UI
const ui = new UI();

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    ui.fillYears();

});

// Event listeners
eventListeners();
function eventListeners() {
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', quoteInsurance);

}

// Functions
function quoteInsurance(e) {
    e.preventDefault();
    // Read the brand selected
    const brand = document.querySelector('#marca').value;
    // Read the year selected
    const year = document.querySelector('#year').value;
    // Read the type of coverage
    const type = document.querySelector('input[name="tipo"]:checked').value;
    if (brand === '' || year === '' || type === '') {
        if (document.querySelector('.mensaje') === null) {
            ui.showAlert('All fields are required', 'error');
        }
        return;
    }
    if (document.querySelector('.mensaje') === null){
        ui.showAlert('Quoting...', 'exito');
    }

    // instantiate insurance
    const insurance = new Insurance(brand, year, type);
    insurance.quoteInsurance();
}



