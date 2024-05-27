import Varietal from './varietal'
export default class Vino {
  constructor(
    nombre,
    bodega,
    añada,
    fechaActualizacion,
    imagenEtiqueta,
    notaDeCataBodega,
    precioARS,
    reseña,
    tiposUvas,
    maridaje
  ) {
    this.nombre = nombre
    this.fechaActualizacion = fechaActualizacion
    this.añada = añada
    this.imagenEtiqueta = imagenEtiqueta
    this.notaDeCataBodega = notaDeCataBodega
    this.precioARS = precioARS
    this.reseña = reseña
    this.bodega = bodega
    this.varietal = this.crearVarietal(tiposUvas)
    this.maridaje = maridaje
  }
  crearVarietal(listaTiposUvas) {
    let varietales = []
    listaTiposUvas.forEach(element => {
      const nuevoVarietal = new Varietal(
        element.porcentaje,
        element.uva.getDescripcion(),
        element.uva
      )
      varietales.push(nuevoVarietal)
    })
    return varietales
  }
  calcularRanking() {
    let contador = 0
    let suma = 0
    this.reseña.forEach(element => {
      contador++
      let puntaje = element.getPuntaje()
      suma += puntaje
    })
    return Math.round(suma / contador)
  }
  compararEtiqueta(etiqueta) {
    return this.imagenEtiqueta === etiqueta
  }
  esDeBodega(nombreBodega) {}
  esDeRegionVitivinicola(nombreRegion) {}
  getNombre() {
    return this.nombre
  }
  getFechaActualizacion() {
    return this.fechaActualizacion
  }
  getAñada() {
    return this.añada
  }
  getImagenEtiqueta() {
    return this.imagenEtiqueta
  }
  getNotaCata() {
    return this.notaDeCataBodega
  }
  getPrecio() {
    return this.precioARS
  }
  getReseña() {
    return this.reseña
  }
  getBodega() {
    return this.bodega
  }
  getVarietal() {
    return this.varietal
  }
  getMaridaje() {
    return this.maridaje
  }
  setNombre(nombre) {
    this.nombre = nombre
  }
  setFechaActualizacion(fechaActualizacion) {
    this.fechaActualizacion = fechaActualizacion
  }
  setAñada(añada) {
    this.añada = añada
  }
  setImagenEtiqueta(imagenEtiqueta) {
    this.imagenEtiqueta = imagenEtiqueta
  }
  setNotaCata(notaDeCataBodega) {
    this.notaDeCataBodega = notaDeCataBodega
  }
  setPrecio(precio) {
    this.precioARS = precio
  }
  setReseña(reseñas) {
    this.reseña = reseñas
  }
  setBodega(bodega) {
    this.bodega = bodega
  }
  setVarietal(varietal) {
    this.varietal = varietal
  }
  setMaridaje(maridaje) {
    this.maridaje = maridaje
  }
  sosVinoAActualizar(vinosAActualizar) {
    const nombresVinosActualizar = vinosAActualizar.map(
      element => element.nombre
    )
    return nombresVinosActualizar.includes(this.nombre)
  }
}
