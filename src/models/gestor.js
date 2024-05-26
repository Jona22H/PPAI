"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data/data");
console.log("Brenda");
class Gestor {
    constructor() {
        this.bodegaAActualizar = data_1.dataBodega[0];
        this.fechaActual = new Date();
        this.vinosEnRemoto = [];
        this.vinosAMostrar = [];
        this.pantalla = undefined;
    }
    opcionImportarActualizacion(pantalla) {
        this.getFechaActual();
        var bodegasConActualizaciones = this.buscarBodegasConActualizacion(this.fechaActual);
        /*for(var bodega of bodegasConActualizaciones){
            console.log(bodega.getNombre())
        }*/
        //mostrarBodegasConActu(bodegasConActualizaciones)
        pantalla.mostrarBodegasConActu(bodegasConActualizaciones);
    }
    buscarBodegasConActualizacion(fechaActual) {
        let bodegasAActualizar = [];
        for (let bodega of data_1.dataBodega) {
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
        this.obtenerActualizacionVinos();
        this.actualizarVinosDeBodega();
        console.log(this.vinosAMostrar[0].vinoAMostrar);
    }
    obtenerActualizacionVinos() {
        this.vinosEnRemoto = data_1.dataVinoRemoto.filter(vino => vino.getBodega().getNombre() == this.bodegaAActualizar.getNombre());
    }
    actualizarVinosDeBodega() {
        //vinos a mostrar es [{vino, estado},{vino2, estado}]
        this.vinosAMostrar = this.bodegaAActualizar.actualizarVinos(this.vinosEnRemoto);
        this.bodegaAActualizar.setFechaUltimaActualizacion(new Date());
        //pantalla.mostrarResumenDeActualizacion(vinosAMostrar)
    }
    notificarEnofilosSuscriptos() {
        let nombresUsuariosANotificar = [];
        data_1.dataEnofilos.forEach(enofilo => {
            if (enofilo.estaSuscriptoABodega(this.bodegaAActualizar)) {
                let nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario();
                nombresUsuariosANotificar.push(nombreUsuarioEnofilo);
            }
        });
    }
    generarNotificacion(InterfazNotificacionPush) {
        let notificacion = `Hay novedades de la bodega ${this.bodegaAActualizar} en la app`;
        InterfazNotificacionPush.notificarActualizacionBodega();
    }
}
exports.default = Gestor;
var gest = new Gestor();
gest.tomarSeleccionBodega(data_1.dataBodega[2]);
