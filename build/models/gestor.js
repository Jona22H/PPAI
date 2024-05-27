import { dataBodega, dataEnofilos } from './data/data.js';
import InterfazNotificacionPush from './interfazNotificacionPush.js';
import InterfazSistemaDeBodega from './interfazSistemaBodega.js';
//console.log('Brenda')
export default class Gestor {
    bodegaAActualizar;
    fechaActual;
    vinosEnRemoto;
    vinosAMostrar;
    pantalla;
    interfazNotificacionPush;
    interfazSistemaDeBodega;
    constructor() {
        this.bodegaAActualizar = dataBodega[0];
        this.fechaActual = new Date();
        this.vinosEnRemoto = [];
        this.vinosAMostrar = [];
        this.pantalla = undefined;
        this.interfazNotificacionPush = new InterfazNotificacionPush();
        this.interfazSistemaDeBodega = new InterfazSistemaDeBodega();
    }
    opcionImportarActualizacion(pantalla) {
        this.getFechaActual();
        this.pantalla = pantalla;
        var bodegasConActualizaciones = this.buscarBodegasConActualizacion(this.fechaActual);
        /*for(var bodega of bodegasConActualizaciones){
                console.log(bodega.getNombre())
            }*/
        //mostrarBodegasConActu(bodegasConActualizaciones)
        pantalla.mostrarBodegasConActu(bodegasConActualizaciones);
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
            this.vinosEnRemoto =
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
        this.vinosAMostrar = this.bodegaAActualizar.actualizarVinos(this.vinosEnRemoto);
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
        this.generarNotificacion(this.interfazNotificacionPush, nombresUsuariosANotificar);
    }
    generarNotificacion(InterfazNotificacionPush, nombresUsuariosANotificar) {
        let notificacion = `Hay novedades de la bodega ${this.bodegaAActualizar} disponibles en la app`;
        InterfazNotificacionPush.notificarActualizacionBodega(notificacion, nombresUsuariosANotificar);
    }
}
// var gest = new Gestor()
// gest.tomarSeleccionBodega(dataBodega[1])
// console.log(gest.vinosAMostrar)
