var TipoUva = /** @class */ (function () {
    function TipoUva(nom, desc) {
        if (desc === void 0) { desc = ''; }
        this.nombre = nom;
        this.descripcion = desc;
    }
    TipoUva.prototype.getNombre = function () {
        return this.nombre;
    };
    TipoUva.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    TipoUva.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    TipoUva.prototype.setDescripcion = function (desc) {
        this.descripcion = desc;
    };
    TipoUva.prototype.sosTipoUva = function (tipoAComprobar) {
        return this.nombre === tipoAComprobar;
    };
    return TipoUva;
}());
export default TipoUva;
/*
console.log("hola")
let tipoMalvec = new TipoUva("malvec", "buena uva")
const nom = tipoMalvec.getNombre()
console.log(nom)

// let tipoMalvec = new TipoUva("malvec", "buena uva")
// const nom = tipoMalvec.getNombre()
// console.log(nom)

// let tipoBLanco = new TipoUva("blanco", "mala uva")

// console.log(tipoBLanco.sosTipoUva("malvec"))*/
