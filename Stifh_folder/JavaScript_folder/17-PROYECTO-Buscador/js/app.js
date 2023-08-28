
///////////////////////////VARIABLES ////////////////////////////////

// Selector of the html Select (marca, year, minimo, maximo, puertas, color)
const brand = document.querySelector('#marca');
const year = document.querySelector('#year');
const minPrice = document.querySelector('#minimo')
const maxPrice = document.querySelector('#maximo');
const carDoors = document.querySelector('#puertas');
const carColor = document.querySelector('#color');
//Selector of the html div (resultado)
const response = document.querySelector('#resultado');


// Get the current year
const max = new Date().getFullYear();

//Get 10 years before of the current year
const min = max - 10

// generate a object with the search
const dataSearch = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

///////////////////////////// EVENTS ////////////////////////////////

// Event listener for the DOM
document.addEventListener('DOMContentLoaded', () => {
    showCars(autos);
    // fill the options of years
    fillSelect();
});


/*
    Events listeners for the selectors of the html Select 
    (marca, year, minimo, maximo, puertas, color)
*/

brand.addEventListener('change', e => {
    dataSearch.marca = e.target.value;
    filterCar();
});

year.addEventListener('change', e => {
    dataSearch.year = parseInt(e.target.value);
    filterCar();
});

minimo.addEventListener('change', e => {
    dataSearch.minimo = e.target.value;
    filterCar();
});

maximo.addEventListener('change', e => {
    dataSearch.maximo = e.target.value;
    filterCar();
});

puertas.addEventListener('change', e => {
    dataSearch.puertas = parseInt(e.target.value);
    filterCar()
});

transmision.addEventListener('change', e => {
    dataSearch.transmision = e.target.value;
    filterCar()
});

color.addEventListener('change', e => {
    dataSearch.color = e.target.value;
    filterCar()
});


// add event listener to visualize the object dataSearch in console
// show_object  = document.querySelectorAll('.u-full-width');
// show_object.forEach(element => {
//     element.addEventListener('change', () => {
//         console.log(dataSearch);
//     });
// });


////////////////////////// FUNCTIONS ////////////////////////////////

// function to show cars in the HTML section (resultado)
function showCars(autos){

    // clear the HTML
    clearHTML();

    // traverses each element (auto) within the array of objects (autos)
    autos.forEach(auto => {
    
        // destructuring element of the array of object (autos)
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;

        // create a paragraph for each element (auto)
        const carHTML = document.createElement('p');
    
        // insert the text into the paragraph
        carHTML.textContent = `
            ${marca} ${modelo} - 
            ${year} - ${puertas} Puertas 
            - Transmisión: ${transmision} 
            - Precio: ${precio} - Color: ${color}
        `;

        // insert the paragraph into the HTML
        response.appendChild(carHTML);

    });
}

// clear the HTML section (resultado)
function clearHTML(){
    while(response.firstChild){
        response.removeChild(response.firstChild);
    }
}

// function to fill the options of HTML Select (years)
function fillSelect(){
    for(let i = max; i >= min; i--){
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

// function to filter cars by whatever the user select
function filterCar(){

    /* 
        filter the array of objects (autos) 
        by the options selected by the user 
    */
    const result = autos.filter(filterBrand)

    /* 
        filtering each nested option, 
        you end up filtering by an exact search parameter
    */
    .filter(filterYear) 
    .filter(filterMinPrice)
    .filter(filterMaxPrice)
    .filter(filterDoors)
    .filter(filterTransmission)
    .filter(filterColor);

    if(result.length){
        // show the filtered cars in the HTML section (resultado)
        showCars(result);
    } else{
        // show a message if there are no results
        noResults();
    }
    console.log(result)
}

// functions to filter by each option
function filterBrand(auto){
    const {marca} = dataSearch;
    if(marca){
        return auto.marca === marca;
    }
    return auto;
}
function filterYear(auto){
    const {year} = dataSearch;
    if(year){
        return auto.year === parseInt(year);
    }
    return auto;
}
function filterMinPrice(auto){
    const {minimo} = dataSearch;
    if(minimo){
        return auto.precio >= parseInt(minimo);
    }
    return auto;
}
function filterMaxPrice(auto){
    const {maximo} = dataSearch;
    if(maximo){
        return auto.precio <= parseInt(maximo);
    }
    return auto;
}
function filterDoors(auto){
    const {puertas} = dataSearch;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
}
function filterTransmission(auto){
    const {transmision} = dataSearch;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}
function filterColor(auto){
    const {color} = dataSearch;
    if(color){
        return auto.color === color;
    }
    return auto;
}

// function to show a message if there are no results
function noResults(){
    clearHTML();

    const noResult = document.createElement('div');
    noResult.classList.add('alerta', 'error');
    noResult.textContent = 'No hay resultados, intenta con otros términos de búsqueda';
    response.appendChild(noResult);
}
