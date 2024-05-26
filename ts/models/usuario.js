var Usuario = /** @class */ (function () {
    function Usuario(contra, nom, prem, cobroPrem) {
        this._contraseña = contra;
        this._nombre = nom;
        this._premium = prem;
        this._cobroPremium = cobroPrem;
    }
    Usuario.prototype.getContraseña = function () {
        return this._contraseña;
    };
    Usuario.prototype.setContraseña = function (v) {
        this._contraseña = v;
    };
    Usuario.prototype.getNombre = function () {
        return this._nombre;
    };
    Usuario.prototype.setNombre = function (v) {
        this._nombre = v;
    };
    Usuario.prototype.getPremium = function () {
        return this._premium;
    };
    Usuario.prototype.setPremium = function (v) {
        this._premium = v;
    };
    Usuario.prototype.getCobroPremium = function () {
        return this._cobroPremium;
    };
    Usuario.prototype.setCobroPremium = function (v) {
        this._cobroPremium = v;
    };
    Usuario.prototype.esTuUsuario = function (usuario) {
        return this._nombre === usuario.getNombre();
    };
    return Usuario;
}());
export default Usuario;
