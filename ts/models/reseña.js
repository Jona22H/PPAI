var Reseña = /** @class */ (function () {
    function Reseña(comentario, esPremium, fechaReseña, puntaje) {
        this.comentario = comentario;
        this.esPremium = esPremium;
        this.fechaReseña = fechaReseña;
        this.puntaje = puntaje;
    }
    Reseña.prototype.getComentario = function () {
        return this.comentario;
    };
    Reseña.prototype.getEsPremium = function () {
        return this.esPremium;
    };
    Reseña.prototype.getFechaReseña = function () {
        return this.fechaReseña;
    };
    Reseña.prototype.getPuntaje = function () {
        return this.puntaje;
    };
    Reseña.prototype.setComentario = function (comentario) {
        this.comentario = comentario;
    };
    Reseña.prototype.setEsPremium = function (esPremium) {
        this.esPremium = esPremium;
    };
    Reseña.prototype.setFechaReseña = function (fechaReseña) {
        this.fechaReseña = fechaReseña;
    };
    Reseña.prototype.setPuntaje = function (puntaje) {
        this.puntaje = puntaje;
    };
    Reseña.prototype.esPremiun = function () {
        //???
    };
    Reseña.prototype.sosDeEnofilo = function () {
        //???
    };
    Reseña.prototype.sosDeSomelier = function () {
        //???
    };
    return Reseña;
}());
export default Reseña;
