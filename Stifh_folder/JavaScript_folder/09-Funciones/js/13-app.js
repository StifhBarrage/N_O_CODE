const reproductor = {
    cancion: '',

    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),

    pausar: () =>console.log('Pausando...'),

    borrar: id => console.log(`Borrando cancion con el id ${id}`),

    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),

    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist de ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }

};

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

