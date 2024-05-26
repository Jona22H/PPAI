import Varietal from './varietal.js';
var Vino = /** @class */ (function () {
    function Vino(nombre, bodega, añada, fechaActualizacion, imagenEtiqueta, notaDeCataBodega, precioARS, reseña, tiposUvas, maridaje) {
        this.nombre = nombre;
        this.fechaActualizacion = fechaActualizacion;
        this.añada = añada;
        this.imagenEtiqueta = imagenEtiqueta;
        this.notaDeCataBodega = notaDeCataBodega;
        this.precioARS = precioARS;
        this.reseña = reseña;
        this.bodega = bodega;
        this.varietal = this.crearVarietal(tiposUvas);
        this.maridaje = maridaje;
    }
    Vino.prototype.crearVarietal = function (listaTiposUvas) {
        var varietales = [];
        listaTiposUvas.forEach(function (element) {
            var nuevoVarietal = new Varietal(element.porcentaje, element.uva.getDescripcion(), element.uva);
            varietales.push(nuevoVarietal);
        });
        return varietales;
    };
    Vino.prototype.calcularRanking = function () {
        var contador = 0;
        var suma = 0;
        this.reseña.forEach(function (element) {
            contador++;
            var puntaje = element.getPuntaje();
            suma += puntaje;
        });
        return Math.round(suma / contador);
    };
    Vino.prototype.compararEtiqueta = function (etiqueta) {
        return this.imagenEtiqueta === etiqueta;
    };
    Vino.prototype.esDeBodega = function (nombreBodega) { };
    Vino.prototype.esDeRegionVitivinicola = function (nombreRegion) { };
    Vino.prototype.getNombre = function () {
        return this.nombre;
    };
    Vino.prototype.getFechaActualizacion = function () {
        return this.fechaActualizacion;
    };
    Vino.prototype.getAñada = function () {
        return this.añada;
    };
    Vino.prototype.getImagenEtiqueta = function () {
        return this.imagenEtiqueta;
    };
    Vino.prototype.getNotaCata = function () {
        return this.notaDeCataBodega;
    };
    Vino.prototype.getPrecio = function () {
        return this.precioARS;
    };
    Vino.prototype.getReseña = function () {
        return this.reseña;
    };
    Vino.prototype.getBodega = function () {
        return this.bodega;
    };
    Vino.prototype.getVarietal = function () {
        return this.varietal;
    };
    Vino.prototype.getMaridaje = function () {
        return this.maridaje;
    };
    Vino.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Vino.prototype.setFechaActualizacion = function (fechaActualizacion) {
        this.fechaActualizacion = fechaActualizacion;
    };
    Vino.prototype.setAñada = function (añada) {
        this.añada = añada;
    };
    Vino.prototype.setImagenEtiqueta = function (imagenEtiqueta) {
        this.imagenEtiqueta = imagenEtiqueta;
    };
    Vino.prototype.setNotaCata = function (notaDeCataBodega) {
        this.notaDeCataBodega = notaDeCataBodega;
    };
    Vino.prototype.setPrecio = function (precio) {
        this.precioARS = precio;
    };
    Vino.prototype.setReseña = function (reseñas) {
        this.reseña = reseñas;
    };
    Vino.prototype.setBodega = function (bodega) {
        this.bodega = bodega;
    };
    Vino.prototype.setVarietal = function (varietal) {
        this.varietal = varietal;
    };
    Vino.prototype.setMaridaje = function (maridaje) {
        this.maridaje = maridaje;
    };
    Vino.prototype.sosVinoAActualizar = function (vinosAActualizar) {
        var nombresVinosActualizar = vinosAActualizar.map(function (element) { return element.nombre; });
        return nombresVinosActualizar.includes(this.nombre);
    };
    return Vino;
}());
export default Vino;
