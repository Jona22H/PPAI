import Vino from './vino'

export default class Reseña {
  private comentario: string
  private esPremium: boolean
  private fechaReseña: Date
  private puntaje: number
  private vino: undefined | Vino

  constructor(
    comentario: string,
    esPremium: boolean,
    fechaReseña: Date,
    puntaje: number,
    vino: Vino | undefined
  ) {
    this.comentario = comentario
    this.esPremium = esPremium
    this.fechaReseña = fechaReseña
    this.puntaje = puntaje
    this.vino = vino
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

  public setVino(vino: Vino) {
    this.vino = vino
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
