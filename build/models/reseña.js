export default class Reseña {
    comentario;
    esPremium;
    fechaReseña;
    puntaje;
    vino;
    constructor(comentario, esPremium, fechaReseña, puntaje, vino) {
        this.comentario = comentario;
        this.esPremium = esPremium;
        this.fechaReseña = fechaReseña;
        this.puntaje = puntaje;
        this.vino = vino;
    }
    getComentario() {
        return this.comentario;
    }
    getEsPremium() {
        return this.esPremium;
    }
    getFechaReseña() {
        return this.fechaReseña;
    }
    getPuntaje() {
        return this.puntaje;
    }
    setComentario(comentario) {
        this.comentario = comentario;
    }
    setEsPremium(esPremium) {
        this.esPremium = esPremium;
    }
    setFechaReseña(fechaReseña) {
        this.fechaReseña = fechaReseña;
    }
    setPuntaje(puntaje) {
        this.puntaje = puntaje;
    }
    setVino(vino) {
        this.vino = vino;
    }
    esPremiun() {
        //???
    }
    sosDeEnofilo() {
        //???
    }
    sosDeSomelier() {
        //???
    }
}
