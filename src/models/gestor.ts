import PantallaAdministradorActualizacionBonVino from './PantallaAdministradorActualizacionBonVino.js'
import Bodega from './bodega.js'
import { dataBodega, dataEnofilos, dataVinoRemoto } from './data/data.js'
import InterfazNotificacionPush from './interfazNotificacionPush.js'
import InterfazSistemaDeBodega from './interfazSistemaBodega.js'
import Vino from './vino.js'

export default class Gestor {
  coordenadasBodega: number
  descripcionBodega: string
  nombreBodega: string
  bodegasAActualizar: Bodega[]
  seleccionBodegas: Bodega
  fechaActual: Date
  vinosAActualizar: Array<Vino>
  pantalla: PantallaAdministradorActualizacionBonVino | undefined
  interfazNotificacionPush: InterfazNotificacionPush
  interfazSistemaDeBodega: InterfazSistemaDeBodega
  nombreUsuariosANotificar: String[]
  notificacion: String

  constructor() {
    this.seleccionBodegas = dataBodega[0]
    this.fechaActual = new Date()
    this.vinosAActualizar = []
    this.pantalla = undefined
    this.interfazNotificacionPush = new InterfazNotificacionPush()
    this.interfazSistemaDeBodega = new InterfazSistemaDeBodega()
    this.nombreUsuariosANotificar = []
    this.notificacion = ''
  }

  public opcionImportarActualizacion(
    pantalla: PantallaAdministradorActualizacionBonVino
  ) {
    this.getFechaActual()
    this.pantalla = pantalla
    this.bodegasAActualizar = this.buscarBodegasConActualizacion(
      this.fechaActual
    )

    pantalla.mostrarBodegasConActualizacion(this.bodegasAActualizar)
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
    this.seleccionBodegas = bodegaAActualizar
    this.obtenerActualizacionesVinos()
    if (bodegaAActualizar.getNombre() !== 'Los robles') {
      this.actualizarVinosDeBodega()
    } else {
      bodegaAActualizar.setFechaUltimaActualizacion(new Date())
      this.pantalla.mostrarPantallaError()
    }
  }
  public obtenerActualizacionesVinos() {
    this.vinosAActualizar =
      this.interfazSistemaDeBodega.obtenerActualizacionVinos(
        this.seleccionBodegas
      )
  }

  private actualizarVinosDeBodega() {
    let vinosAMostrar = this.seleccionBodegas.actualizarVinos(
      this.vinosAActualizar
    )
    this.seleccionBodegas.setFechaUltimaActualizacion(new Date())

    this.pantalla.mostrarResumenDeActualizacion(vinosAMostrar)

    this.notificarEnofilosSuscriptos()
  }

  public notificarEnofilosSuscriptos() {
    let nombresUsuariosANotificar: String[] = []
    dataEnofilos.forEach(enofilo => {
      if (enofilo.estaSuscriptoABodega(this.seleccionBodegas)) {
        let nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario()
        nombresUsuariosANotificar.push(nombreUsuarioEnofilo)
      }
    })
    this.nombreUsuariosANotificar = nombresUsuariosANotificar
    this.generarNotificacion(
      this.interfazNotificacionPush,
      this.nombreUsuariosANotificar
    )
  }

  public generarNotificacion(
    InterfazNotificacionPush: InterfazNotificacionPush,
    nombresUsuariosANotificar: String[]
  ) {
    this.notificacion = `Hay novedades de la bodega ${this.seleccionBodegas.getNombre()} disponibles en la app`
    InterfazNotificacionPush.notificarActualizacionBodega(
      this.notificacion,
      nombresUsuariosANotificar
    )
  }

  public generarResumen() {}
}
