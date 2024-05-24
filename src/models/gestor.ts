import  Bodega from "./bodega"
import { dataBodega } from "./data/data"
import Vino from "./vino"

export class Gestor{
    public opcionImportarActualizacion(){
        var fechaActual = this.getFechaActual()
        var bodegasConActualizaciones = this.buscarBodegasConActualizacion(fechaActual)

    }

    private buscarBodegasConActualizacion(fechaActual:Date){
        /*for(let bodega of dataBodega){
            if(bodega.esTiempoDeActualizar(fechaActual)){
                var coordenadas = bodega.getCoordenadas()
                var descBodega = bodega.getDescripcion()
                var nomBodega = bodega.getNombre()
            }
            
        }*/
    }

    private getFechaActual():Date{
        var fechaActual = new Date()
        return fechaActual
    }

    public tomarSeleccionBodegas(arrayBodegas:Bodega[]){


    }
    
    private obtenerActualizacionVinos(arrayBodegas: Bodega[]):Vino[]{
        for(let i = 0; i < arrayBodegas.length; i++){
            if(arrayBodegas[i].getNombre() == "Los olmos"){
                //le falta terminar esto, hay que simular que consultamos una api
            }
        }
    }
}