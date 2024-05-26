"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("en la pantalla");
class PantallaAdministradorActualizcionBonVino {
    opccionImportarActualizacion(gestor) {
        this.mostrarPantalla(gestor);
        this.gestor = gestor;
    }
    mostrarPantalla(gestor) {
        gestor.opcionImportarActualizacion(this);
    }
    mostrarBodegasConActu(bodeagasConActualizaciones) {
        this.cuerpo = document.getElementById('cuerpoModificable');
        this.cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
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
          </div>`;
    }
    mostrarResumenActualizacion() {
    }
    tomarSeleccionBodega() {
    }
}
exports.default = PantallaAdministradorActualizcionBonVino;
