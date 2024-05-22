class Bodega {
  private _descripcion: string
  private _historia: string
  private _nombre: string
  private _periodoActualizacion: string
  private _region: string
  private _fechaUltimaActualizacion: string
  private _novedad: string

  constructor(desc: string, hist: string, nom: string, perAct: string, reg: string, fecUltAct: string, nov: string) {
    this._descripcion = desc
    this._historia = hist
    this._nombre = nom
    this._periodoActualizacion = perAct
    this._region = reg
    this._fechaUltimaActualizacion = fecUltAct
    this._novedad = nov
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

  public getPeriodoActualizacion(): string {
    return this._periodoActualizacion
  }
  public setPeriodoActualizacion(v: string) {
    this._periodoActualizacion = v
  }

  public getRegion(): string {
    return this._region
  }
  public setRegion(v: string) {
    this._region = v
  }

  public getFechaUltimaActualizacion(): string {
    return this._fechaUltimaActualizacion
  }
  public setFechaUltimaActualizacion(v: string) {
    this._fechaUltimaActualizacion = v
  }

  public getNovedad(): string {
    return this._novedad
  }
  public setNovedad(v: string) {
    this._novedad = v
  }
}
