import PantallaAdministradorActualizcionBonVino from "./PantallaAdministradorActualizcionBonVino"
import  Bodega from "./bodega"
import { dataBodega, dataEnofilos, dataVinoRemoto } from "./data/data"
import InterfazNotificacionPush from "./interfazNotificacionPush"
import Vino from "./vino"

console.log("Brenda")

export default class Gestor{
    bodegaAActualizar : Bodega
    fechaActual : Date
    vinosEnRemoto : Array<Vino>
    vinosAMostrar : Array<{vinoAMostrar:Vino, estado:String}>
    pantalla: PantallaAdministradorActualizcionBonVino | undefined

    constructor(){
        this.bodegaAActualizar = dataBodega[0]
        this.fechaActual = new Date()
        this.vinosEnRemoto = []
        this.vinosAMostrar = []
        this.pantalla = undefined
        
        
    }

    public opcionImportarActualizacion(pantalla: PantallaAdministradorActualizcionBonVino){
        this.getFechaActual()
        var bodegasConActualizaciones = this.buscarBodegasConActualizacion(this.fechaActual)
        /*for(var bodega of bodegasConActualizaciones){
            console.log(bodega.getNombre())
        }*/
        //mostrarBodegasConActu(bodegasConActualizaciones)
        pantalla.mostrarBodegasConActu(bodegasConActualizaciones)

    }

    private buscarBodegasConActualizacion(fechaActual:Date){
        let bodegasAActualizar: Bodega[] = []
        for(let bodega of dataBodega){
            if(bodega.esTiempoDeActualizar(fechaActual)){
                bodegasAActualizar.push(bodega)
            }
        }
        return bodegasAActualizar
    }

    private getFechaActual(){
        var fechaActual = new Date()
        this.fechaActual = fechaActual
    }

    public tomarSeleccionBodega(bodegaAActualizar : Bodega){
        this.bodegaAActualizar = bodegaAActualizar;
        this.obtenerActualizacionVinos()
        this.actualizarVinosDeBodega()
        console.log(this.vinosAMostrar[0].vinoAMostrar)


    }

    
    private obtenerActualizacionVinos(){
        this.vinosEnRemoto = dataVinoRemoto.filter(vino => vino.getBodega().getNombre() == this.bodegaAActualizar.getNombre())
        
        
    }

    private actualizarVinosDeBodega(){
        //vinos a mostrar es [{vino, estado},{vino2, estado}]
       this.vinosAMostrar = this.bodegaAActualizar.actualizarVinos(this.vinosEnRemoto)
       console.log(this.vinosAMostrar)
       this.bodegaAActualizar.setFechaUltimaActualizacion(new Date())
       //pantalla.mostrarResumenDeActualizacion(vinosAMostrar)
    }

    public notificarEnofilosSuscriptos(){
        let nombresUsuariosANotificar: String[] = []
        dataEnofilos.forEach(enofilo => {
            if(enofilo.estaSuscriptoABodega(this.bodegaAActualizar)){
                let nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario()
                nombresUsuariosANotificar.push(nombreUsuarioEnofilo)
            }
        })
    }

    public generarNotificacion(InterfazNotificacionPush: InterfazNotificacionPush){
        let notificacion = `Hay novedades de la bodega ${this.bodegaAActualizar} en la app`
        InterfazNotificacionPush.notificarActualizacionBodega()
    }

}
var gest = new Gestor()
gest.tomarSeleccionBodega(dataBodega[2])
