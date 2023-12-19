// Mediator Pattern

// 1. Create the Mediator

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// 2. Create the Objects
const stifh = new Comprador('Stifh');
const jhon = new Comprador('Jhon');
const vendedor = new Vendedor('Vendedor de Autos');
const subasta = new Subasta();

// 3. Register the Objects
subasta.registrar(stifh);
subasta.registrar(jhon);
subasta.registrar(vendedor);

// 4. Execute the functions
vendedor.oferta('Mustang 1966', 300);

stifh.oferta(350, stifh);
jhon.oferta(450, jhon);
stifh.oferta(500, stifh);
jhon.oferta(550, jhon);

vendedor.vendido('jhon');