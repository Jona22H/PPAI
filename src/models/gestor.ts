import PantallaAdministradorActualizacionBonVino from './PantallaAdministradorActualizacionBonVino.js'
import Bodega from './bodega.js'
import { dataBodega, dataEnofilos, dataVinoRemoto } from './data/data.js'
import InterfazNotificacionPush from './interfazNotificacionPush.js'
import InterfazSistemaDeBodega from './interfazSistemaBodega.js'
import Vino from './vino.js'

//console.log('Brenda')

export default class Gestor {
  bodegaAActualizar: Bodega
  fechaActual: Date
  vinosEnRemoto: Array<Vino>
  vinosAMostrar: Array<{
    vinoAMostrar: Vino
    estado: String
    varietalesAMostrar: String[]
  }>
  pantalla: PantallaAdministradorActualizacionBonVino | undefined
  interfazNotificacionPush: InterfazNotificacionPush
  interfazSistemaDeBodega: InterfazSistemaDeBodega

  constructor() {
    this.bodegaAActualizar = dataBodega[0]
    this.fechaActual = new Date()
    this.vinosEnRemoto = []
    this.vinosAMostrar = []
    this.pantalla = undefined
    this.interfazNotificacionPush = new InterfazNotificacionPush()
    this.interfazSistemaDeBodega = new InterfazSistemaDeBodega()
  }

  public opcionImportarActualizacion(
    pantalla: PantallaAdministradorActualizacionBonVino
  ) {
    this.getFechaActual()
    this.pantalla = pantalla
    var bodegasConActualizaciones = this.buscarBodegasConActualizacion(
      this.fechaActual
    )
    /*for(var bodega of bodegasConActualizaciones){
            console.log(bodega.getNombre())
        }*/
    //mostrarBodegasConActu(bodegasConActualizaciones)
    pantalla.mostrarBodegasConActu(bodegasConActualizaciones)
  }

  private buscarBodegasConActualizacion(fechaActual: Date) {
    let bodegasAActualizar: Bodega[] = []
    for (let bodega of dataBodega) {
      if (bodega.esTiempoDeActualizar(fechaActual)) {
        bodegasAActualizar.push(bodega)
      }
    }
    return bodegasAActualizar
  }

  private getFechaActual() {
    var fechaActual = new Date()
    this.fechaActual = fechaActual
  }

  public tomarSeleccionBodega(bodegaAActualizar: Bodega) {
    this.bodegaAActualizar = bodegaAActualizar
    if (bodegaAActualizar.getNombre() !== 'Los robles') {
      this.vinosEnRemoto =
        this.interfazSistemaDeBodega.obtenerActualizacionVinos(
          bodegaAActualizar
        )
      this.actualizarVinosDeBodega()
      //console.log(this.vinosAMostrar[0].vinoAMostrar)
    } else {
      bodegaAActualizar.setFechaUltimaActualizacion(new Date())
      this.pantalla.mostrarPantallaError()
      //En vez de mostrar la tabla vamos a mostrar un mensaje de error respecto a la no respuesta de la API y el boton dira Volver al menú principal
    }
  }

  // [Varietal1:80, Varietal2:20]
  private actualizarVinosDeBodega() {
    //vinos a mostrar es [{vino, estado},{vino2, estado}]
    this.vinosAMostrar = this.bodegaAActualizar.actualizarVinos(
      this.vinosEnRemoto
    )
    //console.log(this.vinosAMostrar)
    this.bodegaAActualizar.setFechaUltimaActualizacion(new Date())

    this.pantalla.mostrarResumenDeActualizacion(this.vinosAMostrar)
    this.notificarEnofilosSuscriptos()
  }

  public notificarEnofilosSuscriptos() {
    let nombresUsuariosANotificar: String[] = []
    dataEnofilos.forEach(enofilo => {
      if (enofilo.estaSuscriptoABodega(this.bodegaAActualizar)) {
        let nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario()
        nombresUsuariosANotificar.push(nombreUsuarioEnofilo)
      }
    })
    this.generarNotificacion(
      this.interfazNotificacionPush,
      nombresUsuariosANotificar
    )
  }

  public generarNotificacion(
    InterfazNotificacionPush: InterfazNotificacionPush,
    nombresUsuariosANotificar: String[]
  ) {
    let notificacion = `Hay novedades de la bodega ${this.bodegaAActualizar} disponibles en la app`
    InterfazNotificacionPush.notificarActualizacionBodega(
      notificacion,
      nombresUsuariosANotificar
    )
  }
}
// var gest = new Gestor()
// gest.tomarSeleccionBodega(dataBodega[1])
// console.log(gest.vinosAMostrar)
