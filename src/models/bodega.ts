export default class Bodega {
  private _descripcion: string
  private _historia: string
  private _nombre: string
  private _periodoActualizacion: number
  private _fechaUltimaActualizacion: Date
  

  constructor(nom: string, desc: string, hist: string,  perAct: number, fecUltAct: Date) {
    this._descripcion = desc
    this._historia = hist
    this._nombre = nom
    this._periodoActualizacion = perAct
    this._fechaUltimaActualizacion = fecUltAct
  }

  public getDescripcion(): string {
    return this._descripcion
  }
  public setDescripcion(v: string) {
    this._descripcion = v
  }

  public getHistoria(): string {
    return this._historia
  }
  public setHistoria(v: string) {
    this._historia = v
  }

  public getNombre(): string {
    return this._nombre
  }
  public setNombre(v: string) {
    this._nombre = v
  }

  public getPeriodoActualizacion(): number {
    return this._periodoActualizacion
  }
  public setPeriodoActualizacion(v: number) {
    this._periodoActualizacion = v
  }


  public getFechaUltimaActualizacion(): Date {
    return this._fechaUltimaActualizacion
  }
  public setFechaUltimaActualizacion(v: Date) {
    this._fechaUltimaActualizacion = v
  }

}
