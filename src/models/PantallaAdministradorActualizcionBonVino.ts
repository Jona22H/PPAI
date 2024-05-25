import Bodega from "./bodega";
import { Gestor } from "./gestor";

export default class PantallaAdministradorActualizcionBonVino{

    gestor: Gestor | undefined

  public opccionImportarActualizacion(gestor: Gestor){
    this.mostrarPantalla(gestor)
    this.gestor = gestor
  }
  public mostrarPantalla(gestor: Gestor){
    gestor.opcionImportarActualizacion(this)
  }
  public mostrarBodegasConActu(bodeagasConActualizaciones: Bodega[]){

  }

  public mostrarResumenActualizacion(){

  }

  public tomarSeleccionBodega(){

    
  }
}