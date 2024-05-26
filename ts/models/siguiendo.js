var Siguiendo = /** @class */ (function () {
    function Siguiendo(fechaInicio, bodegaOSommelier, amigo) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = undefined;
        this.amigo = amigo;
        this.bodega = undefined;
        this.sommelier = undefined;
        if (typeof bodegaOSommelier === 'string') {
            this.sommelier = bodegaOSommelier;
        }
        else {
            this.bodega = bodegaOSommelier;
        }
    }
    Siguiendo.prototype.getFechaInicio = function () {
        return this.fechaInicio;
    };
    Siguiendo.prototype.setFechaInicio = function (v) {
        this.fechaInicio = v;
    };
    Siguiendo.prototype.getAmigo = function () {
        return this.amigo;
    };
    Siguiendo.prototype.setAmigo = function (amigo) {
        this.amigo = amigo;
    };
    Siguiendo.prototype.getFechaFin = function () {
        return this.fechaFin;
    };
    Siguiendo.prototype.setFechaFin = function (v) {
        this.fechaFin = v;
    };
    Siguiendo.prototype.getBodega = function () {
        return this.bodega;
    };
    Siguiendo.prototype.setBodega = function (bodega) {
        this.bodega = bodega;
    };
    Siguiendo.prototype.getSommelier = function () {
        return this.sommelier;
    };
    Siguiendo.prototype.setSommelier = function (sommelier) {
        this.sommelier = sommelier;
    };
    Siguiendo.prototype.sosDeSommelier = function (sommelier) {
        return this.sommelier === sommelier;
    };
    // ver
    Siguiendo.prototype.sosDeAmigo = function (amigo) {
        return this.amigo === amigo;
    };
    Siguiendo.prototype.sosDeBodega = function (bodega) {
        return this.bodega === bodega;
    };
    return Siguiendo;
}());
export default Siguiendo;
