import PantallaAdministradorActualizcionBonVino from './models/PantallaAdministradorActualizcionBonVino'
import Gestor from './models/gestor'
function renderizarPantalla(gestor, pantalla) {
  let cuerpo = document.getElementById('cuerpoModificable')
  if (cuerpo) {
    cuerpo.innerHTML = `<div>
  <div class="container.fluid text-center" id="paddingBoton">
    <button type="button" class="btn" id="btIrAActualizarBodegas">
      Importar Actualizacion de vinos de bodega
    </button>
  </div>
  </div>`
    let boton = document.getElementById('btIrAActualizarBodegas')
    boton.addEventListener('click', () => {
      pantalla.opcionImportarActualizacion(gestor)
    })
  }
}
function main() {
  const gestor = new Gestor()
  const pantalla = new PantallaAdministradorActualizcionBonVino()
  renderizarPantalla(gestor, pantalla)
  // document.addEventListener('DOMContentLoaded',() => {
  //   pantalla.opccionImportarActualizacion(gestor)
  // })
}
main()