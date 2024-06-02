import { dataBodega, dataEnofilos } from './data/data.js';
import InterfazNotificacionPush from './interfazNotificacionPush.js';
import InterfazSistemaDeBodega from './interfazSistemaBodega.js';
//console.log('Brenda')
export default class Gestor {
    bodegasAActualizar;
    bodegaAActualizar;
    fechaActual;
    vinosAActualizar;
    vinosAMostrar;
    pantalla;
    interfazNotificacionPush;
    interfazSistemaDeBodega;
    nombreUsuariosANotificar;
    notificacion;
    constructor() {
        this.bodegaAActualizar = dataBodega[0];
        this.fechaActual = new Date();
        this.vinosAActualizar = [];
        this.vinosAMostrar = [];
        this.pantalla = undefined;
        this.interfazNotificacionPush = new InterfazNotificacionPush();
        this.interfazSistemaDeBodega = new InterfazSistemaDeBodega();
        this.nombreUsuariosANotificar = [];
        this.notificacion = '';
    }
    opcionImportarActualizacion(pantalla) {
        this.getFechaActual();
        this.pantalla = pantalla;
        this.bodegasAActualizar = this.buscarBodegasConActualizacion(this.fechaActual);
        /*for(var bodega of bodegasConActualizaciones){
                console.log(bodega.getNombre())
            }*/
        //mostrarBodegasConActu(bodegasConActualizaciones)
        pantalla.mostrarBodegasConActu(this.bodegasAActualizar);
    }
    buscarBodegasConActualizacion(fechaActual) {
        let bodegasAActualizar = [];
        for (let bodega of dataBodega) {
            if (bodega.esTiempoDeActualizar(fechaActual)) {
                bodegasAActualizar.push(bodega);
            }
        }
        return bodegasAActualizar;
    }
    getFechaActual() {
        var fechaActual = new Date();
        this.fechaActual = fechaActual;
    }
    tomarSeleccionBodega(bodegaAActualizar) {
        this.bodegaAActualizar = bodegaAActualizar;
        if (bodegaAActualizar.getNombre() !== 'Los robles') {
            this.vinosAActualizar =
                this.interfazSistemaDeBodega.obtenerActualizacionVinos(bodegaAActualizar);
            this.actualizarVinosDeBodega();
            //console.log(this.vinosAMostrar[0].vinoAMostrar)
        }
        else {
            bodegaAActualizar.setFechaUltimaActualizacion(new Date());
            this.pantalla.mostrarPantallaError();
            //En vez de mostrar la tabla vamos a mostrar un mensaje de error respecto a la no respuesta de la API y el boton dira Volver al menú principal
        }
    }
    // [Varietal1:80, Varietal2:20]
    actualizarVinosDeBodega() {
        //vinos a mostrar es [{vino, estado},{vino2, estado}]
        this.vinosAMostrar = this.bodegaAActualizar.actualizarVinos(this.vinosAActualizar);
        //console.log(this.vinosAMostrar)
        this.bodegaAActualizar.setFechaUltimaActualizacion(new Date());
        this.pantalla.mostrarResumenDeActualizacion(this.vinosAMostrar);
        this.notificarEnofilosSuscriptos();
    }
    notificarEnofilosSuscriptos() {
        let nombresUsuariosANotificar = [];
        dataEnofilos.forEach(enofilo => {
            if (enofilo.estaSuscriptoABodega(this.bodegaAActualizar)) {
                let nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario();
                nombresUsuariosANotificar.push(nombreUsuarioEnofilo);
            }
        });
        this.nombreUsuariosANotificar = nombresUsuariosANotificar;
        this.generarNotificacion(this.interfazNotificacionPush, this.nombreUsuariosANotificar);
    }
    generarNotificacion(InterfazNotificacionPush, nombresUsuariosANotificar) {
        this.notificacion = `Hay novedades de la bodega ${this.bodegaAActualizar.getNombre()} disponibles en la app`;
        InterfazNotificacionPush.notificarActualizacionBodega(this.notificacion, nombresUsuariosANotificar);
    }
}
// var gest = new Gestor()
// gest.tomarSeleccionBodega(dataBodega[1])
// console.log(gest.vinosAMostrar)
