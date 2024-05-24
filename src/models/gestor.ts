import  Bodega from "./bodega"
import { dataBodega, dataEnofilos, dataVinoRemoto } from "./data/data"
import Vino from "./vino"

export class Gestor{
    public opcionImportarActualizacion(){
        var fechaActual = this.getFechaActual()
        var bodegasConActualizaciones = this.buscarBodegasConActualizacion(fechaActual)

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

    private getFechaActual():Date{
        var fechaActual = new Date()
        return fechaActual
    }

    public tomarSeleccionBodega(){

    }

    public tomarSeleccionBodegas(arrayBodegas:Bodega[]){

    }
    
    private obtenerActualizacionVinos(bodegaAActualizar: Bodega){
        let vinosEnRemoto = dataVinoRemoto.filter(vino => vino.getBodega().getNombre() === bodegaAActualizar.getNombre())
        this.actualizarVinosDeBodega(bodegaAActualizar, vinosEnRemoto)
    }

    private actualizarVinosDeBodega(bodegaAActualizar: Bodega, vinosAActualizar: Vino[]){
       let vinosAMostrar = bodegaAActualizar.actualizarVinos(vinosAActualizar)
       bodegaAActualizar.setFechaUltimaActualizacion(new Date())
       //pantalla.mostrarResumenDeActualizacion(vinosAMostrar)
    }

    public notificarEnofilosSuscriptos(){
        dataEnofilos.forEach(enofilo => {
            //enofilo
        })
    }

}