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
    // add elements to the shopping cart
    itemsCart = [...itemsCart, infoCourse];
    console.log(itemsCart);
}

