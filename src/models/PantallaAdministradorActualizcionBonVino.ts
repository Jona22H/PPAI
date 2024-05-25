import Bodega from "./bodega";
import { Gestor } from "./gestor";

export default class PantallaAdministradorActualizcionBonVino{


  public opccionImportarActualizacion(){
    this.mostrarPantalla()
  }
  public mostrarPantalla(){
    let pantalla = `<div>
    <div class="background-container">
      <div class="text-overlay">
          <h1 id="text1">BONVINO</h1>
          <h4 id="text2">Encuentra el vino correcto</h4>
      </div>
  </div>
  </div>

  <div class="container.fluid text-center" id="paddingBoton">
    <button type="button" class="btn"  id="btIrAActualizarBodegas">Importar Actualizacion de vinos de bodega</button>
  </div>

<hr>`
    
    let cuerpo = document.getElementById('lol')
    if(cuerpo){
      cuerpo.innerHTML = pantalla
    }
  }
  public mostrarBodegasConActu(bodeagasConActualizaciones: Bodega[]){

  }

  public mostrarResumenActualizacion(){

  }

  public tomarSeleccionBodega(){

    
  }
}