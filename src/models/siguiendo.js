export default class Siguiendo {
  constructor(fechaInicio, bodegaOSommelier, amigo) {
    this.fechaInicio = fechaInicio
    this.fechaFin = undefined
    this.amigo = amigo
    this.bodega = undefined
    this.sommelier = undefined
    if (typeof bodegaOSommelier === 'string') {
      this.sommelier = bodegaOSommelier
    } else {
      this.bodega = bodegaOSommelier
    }
  }
  getFechaInicio() {
    return this.fechaInicio
  }
  setFechaInicio(v) {
    this.fechaInicio = v
  }
  getAmigo() {
    return this.amigo
  }
  setAmigo(amigo) {
    this.amigo = amigo
  }
  getFechaFin() {
    return this.fechaFin
  }
  setFechaFin(v) {
    this.fechaFin = v
  }
  getBodega() {
    return this.bodega
  }
  setBodega(bodega) {
    this.bodega = bodega
  }
  getSommelier() {
    return this.sommelier
  }
  setSommelier(sommelier) {
    this.sommelier = sommelier
  }
  sosDeSommelier(sommelier) {
    return this.sommelier === sommelier
  }
  // ver
  sosDeAmigo(amigo) {
    return this.amigo === amigo
  }
  sosDeBodega(bodega) {
    return this.bodega === bodega
  }
}
