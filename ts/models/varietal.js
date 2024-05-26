var Varietal = /** @class */ (function () {
    function Varietal(porc, desc, tipoUva) {
        if (desc === void 0) { desc = ''; }
        this.porcentajeComposicion = porc;
        this._descripcion = desc;
        this.tipoUva = tipoUva;
    }
    Varietal.prototype.getPorcentajeComposicion = function () {
        return this.porcentajeComposicion;
    };
    Varietal.prototype.getDescripcion = function () {
        return this._descripcion;
    };
    Varietal.prototype.setPorcentajeComposicion = function (porc) {
        this.porcentajeComposicion = porc;
    };
    Varietal.prototype.setDescripcion = function (desc) {
        this._descripcion = desc;
    };
    Varietal.prototype.getTipoUva = function () {
        return this.tipoUva;
    };
    Varietal.prototype.setTipoUva = function (tipo) {
        this.tipoUva = tipo;
    };
    return Varietal;
}());
export default Varietal;
//let vari = new Varietal(15.8, "lalalal")
//console.log(vari.getPorcentajeComposicion())
