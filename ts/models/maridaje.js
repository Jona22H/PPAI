var Maridaje = /** @class */ (function () {
    function Maridaje(nom, desc) {
        if (desc === void 0) { desc = ''; }
        this.nombre = nom;
        this.descripcion = desc;
    }
    Maridaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Maridaje.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Maridaje.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Maridaje.prototype.setDescripcion = function (desc) {
        return this.nombre;
    };
    Maridaje.prototype.sosMaridaje = function (tipoAComprobar) {
        return this.nombre === tipoAComprobar;
    };
    Maridaje.prototype.maridaConVino = function (vino) {
        var maridajes = vino.getMaridaje();
        var maridajesNombres = maridajes.map(function (elemento) { return elemento.nombre; });
        return maridajesNombres.includes(this.nombre);
    };
    return Maridaje;
}());
export default Maridaje;
