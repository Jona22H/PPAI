export class Usuario {
  private _contraseña: string
  private _nombre: string
  private _premium: boolean
  private _cobroPremium: string

  constructor(contra: string, nom: string, prem: boolean, cobroPrem: string) {
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

  public getPremium(): boolean {
    return this._premium
  }
  public setPremium(v: boolean) {
    this._premium = v
  }

  public getCobroPremium(): string {
    return this._cobroPremium
  }
  public setCobroPremium(v: string) {
    this._cobroPremium = v
  }

  public esTuUsuario(usuario: Usuario){
    return (this._nombre === usuario.getNombre())
  }

}
