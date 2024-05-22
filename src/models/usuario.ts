export class Usuario {
  private _contraseña: string
  private _nombre: string
  private _premium: string
  private _cobroPremium: string

  constructor(contra: string, nom: string, prem: string, cobroPrem: string) {
    this._contraseña = contra
    this._nombre = nom
    this._premium = prem
    this._cobroPremium = cobroPrem
  }

  public getContraseña(): string {
    return this._contraseña
  }
  public setContraseña(v: string) {
    this._contraseña = v
  }

  public getNombre(): string {
    return this._nombre
  }
  public setNombre(v: string) {
    this._nombre = v
  }

  public getPremium(): string {
    return this._premium
  }
  public setPremium(v: string) {
    this._premium = v
  }

  public getCobroPremium(): string {
    return this._cobroPremium
  }
  public setCobroPremium(v: string) {
    this._cobroPremium = v
  }
}
