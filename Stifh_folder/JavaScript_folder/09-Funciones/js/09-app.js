const contructor = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,

}

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando cancion con el id ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
