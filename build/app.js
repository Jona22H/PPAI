import PantallaAdministradorActualizacionBonVino from './models/PantallaAdministradorActualizacionBonVino.js';
import Gestor from './models/gestor.js';
export function renderizarPantalla(gestor, pantalla) {
    let cuerpo = document.getElementById('cuerpoModificable');
    if (cuerpo) {
        cuerpo.innerHTML = `<div>
  <div class="container.fluid text-center" id="paddingBoton">
    <button type="button" class="btn" id="btIrAActualizarBodegas">
      Importar Actualización de vinos de bodega
    </button>
  </div>
  </div>`;
        let boton = document.getElementById('btIrAActualizarBodegas');
        boton.addEventListener('click', () => {
            pantalla.opcionImportarActualizacion(gestor);
            //pantalla.setFuncionCallback(renderizarPantalla(gestor, pantalla))
        });
    }
}
function main() {
    const gestor = new Gestor();
    const pantalla = new PantallaAdministradorActualizacionBonVino();
    renderizarPantalla(gestor, pantalla);
    console.log('llegue al final');
    // document.addEventListener('DOMContentLoaded',() => {
    //   pantalla.opccionImportarActualizacion(gestor)
    // })
}
main();
