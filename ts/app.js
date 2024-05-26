import PantallaAdministradorActualizacionBonVino from './models/PantallaAdministradorActualizacionBonVino.js';
import Gestor from './models/gestor.js';
function renderizarPantalla(gestor, pantalla) {
    var cuerpo = document.getElementById('cuerpoModificable');
    if (cuerpo) {
        cuerpo.innerHTML = "<div>\n  <div class=\"container.fluid text-center\" id=\"paddingBoton\">\n    <button type=\"button\" class=\"btn\" id=\"btIrAActualizarBodegas\">\n      Importar Actualizacion de vinos de bodega\n    </button>\n  </div>\n  </div>";
        var boton = document.getElementById('btIrAActualizarBodegas');
        boton.addEventListener('click', function () {
            pantalla.opcionImportarActualizacion(gestor);
        });
    }
}
function main() {
    var gestor = new Gestor();
    var pantalla = new PantallaAdministradorActualizacionBonVino();
    renderizarPantalla(gestor, pantalla);
    // document.addEventListener('DOMContentLoaded',() => {
    //   pantalla.opccionImportarActualizacion(gestor)
    // })
}
main();
