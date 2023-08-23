// variables
const cart = document.querySelector('#carrito');
const cartContainer = document.querySelector('#lista-carrito tbody');
const emptyCartBtn = document.querySelector('#vaciar-carrito');
const listCourses = document.querySelector('#lista-cursos');
let itemsCart = [];

// function for all the event listeners
uploadEventListeners();
function uploadEventListeners(){
    // add the course to the shopping cart
    listCourses.addEventListener('click', addCourse);

};



// Functions for add the course to the shopping cart
function addCourse(e){
    e.preventDefault();
    const selectedCourse = e.target.parentElement.parentElement;
    if(e.target.classList.contains('agregar-carrito')){
        readDataCourse(selectedCourse);
    }
};


// Get the info of the course
const readDataCourse = (course) => {
    // create an object with the info of the course
    const infoCourse = {
        imag: course.querySelector('img').src,
        title: course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        amount: 1
    }
    // check if the course is already in the shopping cart
    const exist = itemsCart.some( course => course.id === infoCourse.id);
    if(exist){
        // update the amount
        const courses = itemsCart.map( course => {
            if(course.id === infoCourse.id){
                course.amount++;
                return course; // return the object updated
            }else{
                return course; // return the objects that are not duplicated
            }
        });
        itemsCart = [...courses];
    }

    // add elements to the shopping cart
    itemsCart = [...itemsCart, infoCourse];
    console.log(itemsCart);
    showShoppingCart();
}

// function for show the shopping cart in the HTML
const showShoppingCart = () => {

    // clear the HTML
    clearHTML();

    // build the HTML
    itemsCart.forEach( course => {
        // tr is a row in the table
        const {img, title, price, amount, id} = course;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            
            <img src="${course.imag}" width="100">
        </td>
        <td>${title}</td>
        <td>${price}</td>
        <td>${amount}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
        </td>
        `;

        // add the HTML of the shopping cart
        cartContainer.appendChild(row);
    });
}

// function for clear the courses of the tbody
const clearHTML = () => {
    // slow way
    // cartContainer.innerHTML = '';
    while(cartContainer.firstChild){
        cartContainer.removeChild(cartContainer.firstChild);
    }

}

