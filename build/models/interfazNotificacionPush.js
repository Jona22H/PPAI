export default class InterfazNotificacionPush {
    usuariosANotificar = [];
    notificacion = '';
    setUsuariosANotificar(usuariosANotificar) {
        this.usuariosANotificar = usuariosANotificar;
    }
    setNotificacion(notificacion) {
        this.notificacion = notificacion;
    }
    notificarActualizacionBodega(notificacion, nombresUsuariosANotificar) {
        this.notificacion = notificacion;
        this.usuariosANotificar = nombresUsuariosANotificar;
        nombresUsuariosANotificar.forEach(usuario => {
            console.log(`${usuario} fue notificado con exito de que ${notificacion}`);
        });
    }
}
