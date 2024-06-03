export default class TipoUva {
    descripcion;
    nombre;
    constructor(nom, desc = '') {
        this.nombre = nom;
        this.descripcion = desc;
    }
    getNombre() {
        return this.nombre;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setNombre(nom) {
        this.nombre = nom;
    }
    setDescripcion(desc) {
        this.descripcion = desc;
    }
    sosTipoUva(tipoAComprobar) {
        return this.nombre === tipoAComprobar;
    }
}
