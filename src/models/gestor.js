import { dataBodega, dataEnofilos, dataVinoRemoto } from './data/data'
console.log('Brenda')
export default class Gestor {
  constructor() {
    this.bodegaAActualizar = dataBodega[0]
    this.fechaActual = new Date()
    this.vinosEnRemoto = []
    this.vinosAMostrar = []
    this.pantalla = undefined
  }
  opcionImportarActualizacion(pantalla) {
    this.getFechaActual()
    var bodegasConActualizaciones = this.buscarBodegasConActualizacion(
      this.fechaActual
    )
    /*for(var bodega of bodegasConActualizaciones){
            console.log(bodega.getNombre())
        }*/
    //mostrarBodegasConActu(bodegasConActualizaciones)
    pantalla.mostrarBodegasConActu(bodegasConActualizaciones)
  }
  buscarBodegasConActualizacion(fechaActual) {
    let bodegasAActualizar = []
    for (let bodega of dataBodega) {
      if (bodega.esTiempoDeActualizar(fechaActual)) {
        bodegasAActualizar.push(bodega)
      }
    }
    return bodegasAActualizar
  }
  getFechaActual() {
    var fechaActual = new Date()
    this.fechaActual = fechaActual
  }
  tomarSeleccionBodega(bodegaAActualizar) {
    this.bodegaAActualizar = bodegaAActualizar
    if (bodegaAActualizar.getNombre() !== 'Los robles') {
      this.obtenerActualizacionVinos()
      this.actualizarVinosDeBodega()
      //console.log(this.vinosAMostrar[0].vinoAMostrar)
    } else {
      //En vez de mostrar la tabla vamos a mostrar un mensaje de error respecto a la no respuesta de la API y el boton dira Volver al menú principal
    }
  }
  obtenerActualizacionVinos() {
    this.vinosEnRemoto = dataVinoRemoto.filter(
      vino => vino.getBodega().getNombre() == this.bodegaAActualizar.getNombre()
    )
  }
  actualizarVinosDeBodega() {
    //vinos a mostrar es [{vino, estado},{vino2, estado}]
    this.vinosAMostrar = this.bodegaAActualizar.actualizarVinos(
      this.vinosEnRemoto
    )
    //console.log(this.vinosAMostrar)
    this.bodegaAActualizar.setFechaUltimaActualizacion(new Date())
    this.pantalla.mostrarResumenDeActualizacion(this.vinosAMostrar)
  }
  notificarEnofilosSuscriptos() {
    let nombresUsuariosANotificar = []
    dataEnofilos.forEach(enofilo => {
      if (enofilo.estaSuscriptoABodega(this.bodegaAActualizar)) {
        let nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario()
        nombresUsuariosANotificar.push(nombreUsuarioEnofilo)
      }
    })
  }
  generarNotificacion(InterfazNotificacionPush) {
    let notificacion = `Hay novedades de la bodega ${this.bodegaAActualizar} en la app`
    InterfazNotificacionPush.notificarActualizacionBodega()
  }
}
// var gest = new Gestor()
// gest.tomarSeleccionBodega(dataBodega[1])
// console.log(gest.vinosAMostrar)
