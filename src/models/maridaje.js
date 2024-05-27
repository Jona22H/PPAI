export default class Maridaje {
  constructor(nom, desc = '') {
    this.nombre = nom
    this.descripcion = desc
  }
  getNombre() {
    return this.nombre
  }
  getDescripcion() {
    return this.descripcion
  }
  setNombre(nom) {
    this.nombre = nom
  }
  setDescripcion(desc) {
    return this.nombre
  }
  sosMaridaje(tipoAComprobar) {
    return this.nombre === tipoAComprobar
  }
  maridaConVino(vino) {
    let maridajes = vino.getMaridaje()
    let maridajesNombres = maridajes.map(elemento => elemento.nombre)
    return maridajesNombres.includes(this.nombre)
  }
}
