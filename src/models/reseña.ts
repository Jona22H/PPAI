export default class Reseña {
  private comentario: string
  private esPremium: boolean
  private fechaReseña: Date
  private puntaje: number

  constructor(
    comentario: string,
    esPremium: boolean,
    fechaReseña: Date,
    puntaje: number
  ) {
    this.comentario = comentario
    this.esPremium = esPremium
    this.fechaReseña = fechaReseña
    this.puntaje = puntaje
  }

  public getComentario() {
    return this.comentario
  }

  public getEsPremium() {
    return this.esPremium
  }

  public getFechaReseña() {
    return this.fechaReseña
  }

  public getPuntaje() {
    return this.puntaje
  }

  public setComentario(comentario: string) {
    this.comentario = comentario
  }

  public setEsPremium(esPremium: boolean) {
    this.esPremium = esPremium
  }

  public setFechaReseña(fechaReseña: Date) {
    this.fechaReseña = fechaReseña
  }

  public setPuntaje(puntaje: number) {
    this.puntaje = puntaje
  }

  public esPremiun() {
    //???
  }

  public sosDeEnofilo() {
    //???
  }

  public sosDeSomelier() {
    //???
  }
}
