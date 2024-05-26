console.log("compienza paneo")


import Gestor from "./src/models/gestor.js"
import PantallaAdministradorActualizacionBonVino  from "./src/models/PantallaAdministradorActualizcionBonVino"
function renderizarPagina(){
  let cuerpo = document.getElementById('.cuerpoModificable')
  cuerpo.innerHTML = `<div>
  <div class="container.fluid text-center" id="paddingBoton">
    <button type="button" class="btn" id="btIrAActualizarBodegas">
      Importar Actualizacion de vinos de bodega
    </button>
  </div>
  </div>`
  mostrarPantalla()
}


function renderizarBodegasDisponibles(){
  let cuerpo = document.getElementById('.cuerpoModificable')
  cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
  <div class="d-flex m-4">
      <h3>Seleccionar las bodegas a actualizar</h3>
  </div>
  <div class="d-flex flex-wrap">
      <fieldset>
          <div class="col-3 ">
              <div class="form-check form-check-inline ">
                  <input class="form-check-input fs-3 " type="radio" id="inlineCheckbox1" value="option1"
                      name="bodegaAActualizar">
                  <label class="form-check-label fs-3" for="inlineCheckbox1">Bodega </label>
              </div>
          </div>
          <div class="col-3 ">
              <div class="form-check form-check-inline ">
                  <input class="form-check-input fs-3 " type="radio" id="inlineCheckbox2" value="option1"
                      name="bodegaAActualizar">
                  <label class="form-check-label fs-3" for="inlineCheckbox1">Bodega </label>
              </div>
          </div>
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
}

function renderizarResumenBodegas(){
  let cuerpo = document.getElementById('cuerpoModificable')
  cuerpo.innerHTML = `<div class="scrollmenu">
  <table class="table">
    <thead>
      <tr class="table-primary">
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
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Bodega</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Bodega</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th scope="row">Bodega</th>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
        <td>456546464565644465</td>
      </tr>
      <tr>
        <th scope="row">Bodega</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>
<div class="d-flex justify-content-end">
  <div class="d-flex col-3 justify-content-end">
    <button class="btn-bg-color" type="button" id="volver">Confirmar</button>
  </div>`
}

function mostrarPantalla(){
  let boton = document.getElementById('paddingBoton')

  boton.addEventListener('click', () => {
    renderizarBodegasDisponibles()
    let botonConfirmar = document.getElementById('confirmarBodega')
    console.log(botonConfirmar)

    botonConfirmar.addEventListener('click', () => {
      renderizarResumenBodegas()
      let botonVolver = document.getElementById('volver')
      botonVolver.addEventListener('click', () =>{
        renderizarPagina()
      })

    })
  })
}

document.addEventListener('DOMContentLoaded', () =>{
  console.log('hola')
  // renderizarPagina()

})

console.log("en paneo")
var gestor = new Gestor()
var pantalla = new PantallaAdministradorActualizacionBonVino()
var botonIrAActualizar = document.getElementById("btIrAActualizarBodegas")
botonIrAActualizar.addEventListener("click",pantalla.opccionImportarActualizacion(gestor) )