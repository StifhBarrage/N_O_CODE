function iniciarApp() {


    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria);

    obtenerCategorias();

    function obtenerCategorias() {
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarCategorias(resultado.categories) )
    }

    function mostrarCategorias( categorias = [] ) {
        categorias.forEach( categoria => { //Recorrer el arreglo de categorías para obtener los nombres de las categorías

            // Asignar los valores de las categorías a los options (selects)
            const {strCategory} = categoria; // Extraer el nombre de la categoría
            const option = document.createElement('OPTION'); 
            option.value = strCategory;
            option.textContent = strCategory; // Mostrar el nombre de la categoría

            // Mostrar las opciones en el HTML
            selectCategorias.appendChild(option);



        });
    }
    
    function seleccionarCategoria (e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => console.log(resultado.meals) )

    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);