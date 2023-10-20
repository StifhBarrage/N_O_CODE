function iniciarApp() {

    const resultado = document.querySelector('#resultado');
    const selectCategorias = document.querySelector('#categorias');
    
    if (selectCategorias) {

        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();

    }

    const favoritosDiv = document.querySelector('.favoritos');
    if (favoritosDiv) {
        obtenerFavoritos();
    }

    const modal = new bootstrap.Modal('#modal', {} );


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
            .then( resultado => mostrarRecetas(resultado.meals) )

    }

    function mostrarRecetas(recetas = []) {

        
        limpiarHTML(resultado); // Limpiar el HTML previo

        const heading = document.createElement('H2');   
        heading.classList.add('text-center', 'text-black', 'mb-4');
        heading.textContent = recetas.length === 0 ? 'No hay recetas, intenta con otra categoría' : 'Recetas disponibles';
        resultado.appendChild(heading);
        
        // Iterar en los resultados
        recetas.forEach( receta => {
            const {idMeal, strMeal, strMealThumb} = receta; // Extraer los valores de la receta

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4'); // Presentarlo en 3 columnas

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `Imagen de la receta ${strMeal ?? receta.titulo}`;
            recetaImagen.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mg-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver receta';
            // recetaButton.dataset.bsTarget = '#modal';
            // recetaButton.dataset.bsToggle = 'modal';
            recetaButton.onclick = () => {
                seleccionarReceta(idMeal ?? receta.id);
            }

            // Inyectar en cel HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);

         });
    }

    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => mostrarRecetaModal(resultado.meals[0]) )
    }

    function mostrarRecetaModal(receta) {

        console.log(receta);

        const {idMeal, strInstructions, strMeal, strMealThumb} = receta;

        // Añadir contenido al modal
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid mb-4" src="${strMealThumb}" alt="receta ${strMeal}" />
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y Cantidades</h3>
        `;

        const listGroup = document.createElement('UL'); 
        listGroup.classList.add('list-group'); 

        //Mostrar cantidades e ingredientes
        for (let i = 1; i <= 20; i++) { 
            if(receta[`strIngredient${i}`]) { // Si existe el ingrediente
                const ingrediente = receta[`strIngredient${i}`]
                const cantidad = receta[`strMeasure${i}`]

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);

                
            }

        }	

        modalBody.appendChild(listGroup);


        // Botón de cerrar y favorito
        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar de favoritos' : 'Agregar a favoritos';

        // local storage
        btnFavorito.onclick = function() {

            if(existeStorage(idMeal)) {	

                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Agregar a favoritos';
                mostrarToast('Receta eliminada de favoritos');
                return;
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb

            });
            
            btnFavorito.textContent = 'Eliminar de favoritos';
            mostrarToast('Receta agregada a favoritos');
        }
    
        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = function() {
            modal.hide();
        }   

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);


        // Muestra el modal
        modal.show();


    }

    function agregarFavorito(receta) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; // Si no hay nada en el local storage, crear un arreglo vacío
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta])); // Agregar la receta al arreglo de favoritos
    }

    function eliminarFavorito(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? []; // Obtener el arreglo de favoritos
        const nuevosFavoritos = favoritos.filter( receta => receta.id !== id ); // Crear un nuevo arreglo sin la receta que se va a eliminar
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos)); // Guardar el nuevo arreglo en el local storage
    }

    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some( receta => receta.id === id ); // Verificar si la receta existe en el arreglo de favoritos
    }

    function mostrarToast(mensaje) {   
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toast.show();
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if (favoritos.length) {
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay recetas favoritas, agrega alguna';
        noFavoritos.classList.add('text-center', 'fs-4', 'font-bold', 'mg-5');
        resultado.appendChild(noFavoritos);

    }


    function limpiarHTML(selector) {
        while(selector.firstChild) {
            selector.removeChild(selector.firstChild);
        }
    }


}

document.addEventListener('DOMContentLoaded', iniciarApp);