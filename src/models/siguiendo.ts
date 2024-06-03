import Bodega from './bodega.js'
import Enofilo from './enofilo.js'

export default class Siguiendo {
  private fechaInicio: Date
  private fechaFin?: Date
  private bodega?: Bodega
  private sommelier?: string
  private amigo?: Enofilo

  public constructor(
    fechaInicio: Date,
    bodegaOSommelierOamigo: Bodega | string | Enofilo
  ) {
    this.fechaInicio = fechaInicio
    this.fechaFin = undefined

    this.bodega = undefined
    this.sommelier = undefined

    if (typeof bodegaOSommelierOamigo === 'string') {
      this.sommelier = bodegaOSommelierOamigo
    } else if (bodegaOSommelierOamigo instanceof Bodega) {
      this.bodega = bodegaOSommelierOamigo
    } else {
      this.amigo = bodegaOSommelierOamigo
    }
  }

  public getFechaInicio() {
    return this.fechaInicio
  }

  public setFechaInicio(v: Date) {
    this.fechaInicio = v
  }

  public getAmigo() {
    return this.amigo
  }

  public setAmigo(amigo: Enofilo) {
    this.amigo = amigo
  }

  public getFechaFin() {
    return this.fechaFin
  }

  public setFechaFin(v: Date) {
    this.fechaFin = v
  }

  public getBodega() {
    return this.bodega
  }

  public setBodega(bodega: Bodega) {
    this.bodega = bodega
  }

  public getSommelier() {
    return this.sommelier
  }

  public setSommelier(sommelier: string) {
    this.sommelier = sommelier
  }

  public sosDeSommelier(sommelier: string): boolean {
    return this.sommelier === sommelier
  }

  public sosDeAmigo(amigo: Enofilo): boolean {
    return this.amigo === amigo
  }

  public sosDeBodega(bodega: Bodega): boolean {
    return this.bodega === bodega
  }
}
