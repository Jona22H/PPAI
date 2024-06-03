export default class Enofilo {
    _apellido;
    _imagenPerfil;
    _nombre;
    _usuario;
    _seguido;
    reseña;
    favorito;
    getSeguido() {
        return this._seguido;
    }
    setSeguido(v) {
        this._seguido = v;
    }
    constructor(apellido, imagenPerfil, nombre, usuario, seguido = [], reseña = [], favorito = []) {
        this._apellido = apellido;
        this._imagenPerfil = imagenPerfil;
        this._nombre = nombre;
        this._usuario = usuario;
        this._seguido = seguido;
        this.reseña = reseña;
        this.favorito = favorito;
    }
    getApellido() {
        return this._apellido;
    }
    setApellido(v) {
        this._apellido = v;
    }
    getImagenPerfil() {
        return this._imagenPerfil;
    }
    setImagenPerfil(v) {
        this._imagenPerfil = v;
    }
    getNombre() {
        return this._nombre;
    }
    setNombre(v) {
        this._nombre = v;
    }
    getUsuario() {
        return this._usuario;
    }
    setUsuario(v) {
        this._usuario = v;
    }
    estaSuscriptoABodega(bodega) {
        if (!this._seguido)
            return false;
        for (let seguido of this._seguido) {
            const hayBodega = seguido.getBodega();
            if (!hayBodega)
                continue;
            if (seguido.sosDeBodega(bodega))
                return true;
        }
    }
    obtenerNombreUsuario() {
        return this._usuario.mostrarNombre();
    }
    mostrarAmigosSeguidos() { }
    mostrarColeccionFavoritos() { }
    enviarNotificacion() { }
}
