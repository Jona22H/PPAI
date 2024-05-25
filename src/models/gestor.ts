import  Bodega from "./bodega"
import { dataBodega, dataEnofilos, dataVinoRemoto } from "./data/data"
import Vino from "./vino"

export class Gestor{
    bodegaAActualizar : Bodega
    fechaActual : Date
    vinosEnRemoto : Array<Vino>
    vinosAMostrar : Array<{vinoAMostrar:Vino, estado:String}>

    constructor(){
        this.bodegaAActualizar = dataBodega[0]
        this.fechaActual = new Date()
        this.vinosEnRemoto = []
        this.vinosAMostrar = []
        
    }
    

    


    public opcionImportarActualizacion(){
        this.obtenerFechaActual()
        var bodegasConActualizaciones = this.buscarBodegasConActualizacion(this.fechaActual)
        /*for(var bodega of bodegasConActualizaciones){
            console.log(bodega.getNombre())
        }*/
        //mostrarBodegasConActu(bodegasConActualizaciones)

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

    private obtenerFechaActual(){
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
       this.bodegaAActualizar.setFechaUltimaActualizacion(new Date())
       //pantalla.mostrarResumenDeActualizacion(vinosAMostrar)
    }

    public notificarEnofilosSuscriptos(){
        dataEnofilos.forEach(enofilo => {
            enofilo.estaSuscriptoABodega(this.bodegaAActualizar)
        })
    }

}
var gest = new Gestor()
gest.tomarSeleccionBodega(dataBodega[2])