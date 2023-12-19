// Name Spaces

const restauranApp = {};

restauranApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot Dog',
        precio: 15
    }
];

restauranApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restauranApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevoPlatillo = {
            platillo,
            precio
        }
        restauranApp.platillos.push(nuevoPlatillo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menu: `);
        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $ ${platillo.precio}`);
        });
    }
}

const { platillos } = restauranApp;

restauranApp.funciones.mostrarMenu(platillos);

restauranApp.funciones.ordenar(1);

restauranApp.funciones.agregarPlatillo('Pastel', 25);

restauranApp.funciones.mostrarMenu(platillos);

