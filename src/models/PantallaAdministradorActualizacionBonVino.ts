import { renderizarPantalla } from '../app.js'
import Bodega from './bodega.js'
import Gestor from './gestor.js'
import Vino from './vino.js'

export default class PantallaAdministradorActualizacionBonVino {
  gestor: any
  bodegasAActualizar: Bodega[] | undefined
  seleccionBodegas: Bodega | undefined
  resumenActualizacion: HTMLElement | any

  constructor() {
    this.bodegasAActualizar = undefined
    this.seleccionBodegas = undefined
  }

  public opcionImportarActualizacion(gestor: Gestor) {
    this.mostrarPantalla(gestor)
    this.gestor = gestor
  }
  public mostrarPantalla(gestor: Gestor) {
    gestor.opcionImportarActualizacion(this)
  }
  public mostrarBodegasConActualizacion(bodegasConActualizaciones: Bodega[]) {
    this.bodegasAActualizar = bodegasConActualizaciones
    let cuerpo = document.getElementById('cuerpoModificable')
    if (bodegasConActualizaciones.length > 0) {
      cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
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

      for (let i = 0; this.bodegasAActualizar.length > i; i++) {
        let bodega = this.bodegasAActualizar[i]
        let opcion = `<div class="col-3 ">
            <div class="form-check form-check-inline m-1">
                <input class="form-check-input fs-3" type="radio" id="inlineCheckbox${i + 1}" value="${bodega.getNombre()}"
                    name="bodegaAActualizar">
                <label class="form-check-label fs-3" for="inlineCheckbox${i + 1}">${bodega.getNombre()}</label>
            </div>
        </div>`
        fieldSet.innerHTML += opcion
      }
      this.tomarSeleccionBodega(fieldSet, bodegasConActualizaciones)
    } else {
      cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
        <div class="d-flex m-4">
            <h3>No hay bodegas con actualizaciones disponibles</h3>
        </div>
    </div>
    <div class="d-flex justify-content-end  ">
                <div class="d-flex col-3  justify-content-between ">
                    <button class=" btn-bg-color" type="button" id="volverPantalla">Volver</button>
                </div>

            </div>
            <div>
            </div>`
      let botonVolverNoBodegas = document.getElementById('volverPantalla')
      botonVolverNoBodegas.addEventListener('click', () => {
        renderizarPantalla(this.gestor, this)
      })
    }
  }

  public mostrarResumenDeActualizacion(
    vinosAMostrar: Array<{
      vinoAMostrar: Vino
      estado: String
      varietalesAMostrar: String[]
    }>
  ) {
    let cuerpo = document.getElementById('cuerpoModificable')
    cuerpo.innerHTML = `<div class="d-flex justify-content-center">
    <h1>Resumen de Actualización</h1>
  </div>
  <div class="scrollmenu d-flex justify-content-center align-items-center">
    <table class="content-table">
      <thead>
        <tr>
          <th scope="col ">Bodega</th>
          <th scope="col">Nombre del Vino</th>
          <th scope="col">Añada</th>
          <th scope="col">Fecha De Actualizacion</th>
          <th scope="col">Imagen Etiqueta</th>
          <th scope="col">Nota De Cata Bodega</th>
          <th scope="col">Precio ARS</th>
          <th scope="col">Puntaje Promedio</th>
          <th scope="col">Varietales</th>
          <th scope="col">Maridaje</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody id="tablaVinosResumen">
        
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-end">
    <div class="d-flex col-3 justify-content-end">
      <button  class="btn-bg-color" type="button" id="volver">Finalizar</button>
    </div>
  </div>`
    let cuerpoTabla = document.getElementById('tablaVinosResumen')
    for (let vino of vinosAMostrar) {
      let maridajesAMostrar = vino.vinoAMostrar
        .getMaridaje()
        .map(maridaje => maridaje.getNombre())
      let fila = `<tr>
        <th scope="row">${vino.vinoAMostrar.getBodega().getNombre()}</th>
        <td>${vino.vinoAMostrar.getNombre()}</td>
        <td>${vino.vinoAMostrar.getAñada()}</td>
        <td>${new Intl.DateTimeFormat('es-AR', {
          dateStyle: 'full',
          timeStyle: 'medium',
          timeZone: 'America/Argentina/Buenos_Aires'
        }).format(vino.vinoAMostrar.getFechaActualizacion())}</td>
        <td>${vino.vinoAMostrar.getImagenEtiqueta()}</td>
        <td>${vino.vinoAMostrar.getNotaCata()}</td>
        <td>$${vino.vinoAMostrar.getPrecio()}</td>
        <td>${vino.vinoAMostrar.calcularRanking()}</td>
        <td>${vino.varietalesAMostrar.join('\n')}</td>
        <td>${maridajesAMostrar}</td>
        <td>${vino.estado}</td>
        </tr>`
      const filaNueva = cuerpoTabla.insertRow()
      filaNueva.innerHTML = fila
    }

    let botonVolverVinos = document.getElementById('volver')
    botonVolverVinos.addEventListener('click', () => {
      renderizarPantalla(this.gestor, this)
    })
  }

  public mostrarPantallaError() {
    let cuerpo = document.getElementById('cuerpoModificable')
    cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
        <div class="d-flex m-4">
            <h3>La api de la bodega fallo</h3>
        </div>
    </div>
    <div class="d-flex justify-content-end  ">
                <div class="d-flex col-3  justify-content-between ">
                    <button class=" btn-bg-color" type="button" id="volverPantalla">Volver</button>
                </div>

            </div>
            <div>
            </div>`
    let botonVolverNoApi = document.getElementById('volverPantalla')
    botonVolverNoApi.addEventListener('click', () => {
      renderizarPantalla(this.gestor, this)
    })
  }

  public tomarSeleccionBodega(
    fieldSet: HTMLElement | null,
    bodegasConActualizaciones: Bodega[]
  ) {
    let botonConfirmar = document.getElementById('confirmarBodega')
    botonConfirmar.addEventListener('click', () => {
      const radios = fieldSet.querySelectorAll('input[type="radio"]')
      let bodegaSeleccionada = null
      radios.forEach(radio => {
        const input = radio as HTMLInputElement
        if (input.checked) {
          bodegaSeleccionada = input.value
        }
      })

      if (bodegaSeleccionada) {
        this.seleccionBodegas = bodegasConActualizaciones.find(
          (bodega: Bodega) =>
            bodega.getNombre().toLowerCase() ===
            bodegaSeleccionada.toLowerCase()
        )
        this.gestor.tomarSeleccionBodega(this.seleccionBodegas)
      } else {
        console.log('No ando')
      }
    })
  }
}
