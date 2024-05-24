import { Usuario } from "./usuario"

export class Enofilo {
  private _apellido: string
  private _imagenPerfil: string
  private _nombre: string
  private _usuario: Usuario
  private siguiendo

  constructor(apellido: string, imagenPerfil: string, nombre: string, usuario: Usuario) {
    this._apellido = apellido
    this._imagenPerfil = imagenPerfil
    this._nombre = nombre
    this._usuario = usuario
  }

  public getApellido(): string {
    return this._apellido
  }
  public setApellido(v: string) {
    this._apellido = v
  }

  public getImagenPerfil(): string {
    return this._imagenPerfil
  }
  public setImagenPerfil(v: string) {
    this._imagenPerfil = v
  }

  public getNombre(): string {
    return this._nombre
  }
  public setNombre(v: string) {
    this._nombre = v
  }

  public getUsuario(): Usuario {
    return this._usuario
  }
  public setUsuario(v: Usuario) {
    this._usuario = v
  }
  public
}
