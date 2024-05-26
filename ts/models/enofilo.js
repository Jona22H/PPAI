var Enofilo = /** @class */ (function () {
    function Enofilo(apellido, imagenPerfil, nombre, usuario, seguido) {
        this._apellido = apellido;
        this._imagenPerfil = imagenPerfil;
        this._nombre = nombre;
        this._usuario = usuario;
        this._seguido = seguido ? seguido : [];
    }
    Enofilo.prototype.getSeguido = function () {
        return this._seguido;
    };
    Enofilo.prototype.setSeguido = function (v) {
        this._seguido = v;
    };
    Enofilo.prototype.getApellido = function () {
        return this._apellido;
    };
    Enofilo.prototype.setApellido = function (v) {
        this._apellido = v;
    };
    Enofilo.prototype.getImagenPerfil = function () {
        return this._imagenPerfil;
    };
    Enofilo.prototype.setImagenPerfil = function (v) {
        this._imagenPerfil = v;
    };
    Enofilo.prototype.getNombre = function () {
        return this._nombre;
    };
    Enofilo.prototype.setNombre = function (v) {
        this._nombre = v;
    };
    Enofilo.prototype.getUsuario = function () {
        return this._usuario;
    };
    Enofilo.prototype.setUsuario = function (v) {
        this._usuario = v;
    };
    Enofilo.prototype.estaSuscriptoABodega = function (bodega) {
        if (!this._seguido)
            return false;
        for (var _i = 0, _a = this._seguido; _i < _a.length; _i++) {
            var seguido = _a[_i];
            var hayBodega = seguido.getBodega();
            if (!hayBodega)
                continue;
            if (seguido.sosDeBodega(bodega))
                return true;
        }
    };
    Enofilo.prototype.obtenerNombreUsuario = function () {
        return this._usuario.getNombre();
    };
    return Enofilo;
}());
export default Enofilo;
