export default class Varietal {
    _descripcion;
    porcentajeComposicion;
    tipoUva;
    constructor(porc, desc = '', tipoUva) {
        this.porcentajeComposicion = porc;
        this._descripcion = desc;
        this.tipoUva = tipoUva;
    }
    getPorcentajeComposicion() {
        return this.porcentajeComposicion;
    }
    getDescripcion() {
        return this._descripcion;
    }
    setPorcentajeComposicion(porc) {
        this.porcentajeComposicion = porc;
    }
    setDescripcion(desc) {
        this._descripcion = desc;
    }
    conocerTipoDeUva() {
        return this.tipoUva;
    }
    setTipoUva(tipo) {
        this.tipoUva = tipo;
    }
    esDeTipoUva(tipoUva) {
        return (this.tipoUva.getNombre().toLowerCase() ===
            tipoUva.getNombre().toLowerCase());
    }
    mostrarPorcentaje() { }
}
