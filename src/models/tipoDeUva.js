export default class TipoUva {
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
    this.descripcion = desc
  }
  sosTipoUva(tipoAComprobar) {
    return this.nombre === tipoAComprobar
  }
}
/*
console.log("hola")
let tipoMalvec = new TipoUva("malvec", "buena uva")
const nom = tipoMalvec.getNombre()
console.log(nom)

// let tipoMalvec = new TipoUva("malvec", "buena uva")
// const nom = tipoMalvec.getNombre()
// console.log(nom)

// let tipoBLanco = new TipoUva("blanco", "mala uva")

// console.log(tipoBLanco.sosTipoUva("malvec"))*/
