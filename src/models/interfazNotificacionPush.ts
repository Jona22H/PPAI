import Usuario from './usuario.js'

export default class InterfazNotificacionPush {
  private usuariosANotificar: String[] = []
  private notificacion: String = ''

  public setUsuariosANotificar(usuariosANotificar: String[]) {
    this.usuariosANotificar = usuariosANotificar
  }

  public setNotificacion(notificacion: String) {
    this.notificacion = notificacion
  }

  public notificarActualizacionBodega(
    notificacion: String,
    nombresUsuariosANotificar: String[]
  ) {
    this.notificacion = notificacion
    this.usuariosANotificar = nombresUsuariosANotificar
    nombresUsuariosANotificar.forEach(usuario => {
      console.log(`${usuario} fue notificado con exito de que ${notificacion}`)
    })
  }
}
