console.log("en la pantalla")
import Bodega from "./bodega";
import Gestor from "./gestor";
import Vino from "./vino";

export default class PantallaAdministradorActualizcionBonVino{
  cuerpo: HTMLElement | any
  gestor: Gestor | undefined

  public opcionImportarActualizacion(gestor: Gestor){
  
    this.mostrarPantalla(gestor)
    this.gestor = gestor
  }
  public mostrarPantalla(gestor: Gestor){
    gestor.opcionImportarActualizacion(this)
    
  }
  public mostrarBodegasConActu(bodegasConActualizaciones: Bodega[]){
    this.cuerpo = document.getElementById('cuerpoModificable')
    if (bodegasConActualizaciones.length > 0){
        this.cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
        <div class="d-flex m-4">
            <h3>Seleccionar las bodegas a actualizar</h3>
        </div>
        <div class="d-flex flex-wrap">
            <fieldset id="BodegasConActualizacion">
                
            </fieldset>
        </div>

    </div>
    <div class="d-flex justify-content-end  ">
                <div class="d-flex col-3  justify-content-between ">
                    <button class=" btn-bg-color" type="button" id="confirmarBodega">Confirmar</button>
                </div>

            </div>
            <div>
            </div>`
        const fieldSet = document.getElementById('BodegasConActualizacion') 
        
        for(let i = 0; bodegasConActualizaciones.length > i; i++){
            let bodega = bodegasConActualizaciones[i]
            let opcion = `<div class="col-3 ">
            <div class="form-check form-check-inline ">
                <input class="form-check-input fs-3 " type="radio" id="inlineCheckbox${i+1}" value="${bodega.getNombre()}"
                    name="bodegaAActualizar">
                <label class="form-check-label fs-3" for="inlineCheckbox1">${bodega.getNombre()}</label>
            </div>
        </div>`
            fieldSet.innerHTML += opcion
            
        }
        this.tomarSeleccionBodega(fieldSet, bodegasConActualizaciones)
    }else{
        //Mostrar mensaje por pantalla que no hay bodegas a actualizar y mostrar un boton que nos devuelva a la pagina anterior
    }

  }

  public mostrarResumenDeActualizacion(yinosAMostrar: Array<{vinoAMostrar: Vino, estado: String}>){
    // for(let vinoAMostrar of )
  }

  public tomarSeleccionBodega(fieldSet: HTMLElement | null, bodegasConActualizaciones: Bodega[]){
    const boton = document.getElementById('confirmarBodega')
    boton.addEventListener('click', () => {
        const radios = fieldSet.querySelectorAll('input[type="radio"]')
        let bodegaSeleccionada = null
        radios.forEach(radio => {
            const input = radio as HTMLInputElement
            if (input.checked){
                bodegaSeleccionada = input.value
            }
        })

        if (bodegaSeleccionada){
            let bodegaAEnviar = bodegasConActualizaciones.find((bodega: Bodega) => bodega.getNombre().toLowerCase() === bodegaSeleccionada.toLowerCase()) 
            this.gestor.tomarSeleccionBodega(bodegaAEnviar)
        }else{
            console.log('No ando')
        }
    })
    
  }
}