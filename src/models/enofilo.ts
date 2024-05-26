import Bodega from "./bodega"
import  Siguiendo  from "./siguiendo"
import  Usuario  from "./usuario"

export default class Enofilo {
  private _apellido: string
  private _imagenPerfil: string
  private _nombre: string
  private _usuario: Usuario
  private _seguido: Siguiendo[]

  public getSeguido(): Siguiendo[] | undefined {
    return this._seguido
  }
  public setSeguido(v: Siguiendo[]) {
    this._seguido = v
  }

  constructor(
    apellido: string,
    imagenPerfil: string,
    nombre: string,
    usuario: Usuario,
    seguido?: Siguiendo[]
  ) {
    this._apellido = apellido
    this._imagenPerfil = imagenPerfil
    this._nombre = nombre
    this._usuario = usuario
    this._seguido = seguido ? seguido : []
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

  public estaSuscriptoABodega(bodega: Bodega) {
    if (!this._seguido) return false

    for(let seguido of this._seguido) {
      const hayBodega = seguido.getBodega()
      if (!hayBodega) continue

      if (seguido.sosDeBodega(bodega)) return true
    }
  }

  public obtenerNombreUsuario(): String {
    return this._usuario.getNombre()
}
}
