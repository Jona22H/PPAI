//console.log('en la pantalla')
import { renderizarPantalla } from '../app.js';
export default class PantallaAdministradorActualizacionBonVino {
    cuerpo;
    gestor;
    botonVolverNoBodegas;
    botonVolverVinos;
    botonVolverNoApi;
    botonConfirmar;
    cuerpoTabla;
    constructor() {
        this.botonVolverVinos = null;
        this.botonVolverNoBodegas = null;
        this.botonVolverNoApi = null;
        this.botonConfirmar = null;
        this.cuerpoTabla = null;
    }
    opcionImportarActualizacion(gestor) {
        this.mostrarPantalla(gestor);
        this.gestor = gestor;
    }
    mostrarPantalla(gestor) {
        gestor.opcionImportarActualizacion(this);
    }
    mostrarBodegasConActu(bodegasConActualizaciones) {
        this.cuerpo = document.getElementById('cuerpoModificable');
        if (bodegasConActualizaciones.length > 0) {
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
            </div>`;
            const fieldSet = document.getElementById('BodegasConActualizacion');
            for (let i = 0; bodegasConActualizaciones.length > i; i++) {
                let bodega = bodegasConActualizaciones[i];
                let opcion = `<div class="col-3 ">
            <div class="form-check form-check-inline m-1">
                <input class="form-check-input fs-3" type="radio" id="inlineCheckbox${i + 1}" value="${bodega.getNombre()}"
                    name="bodegaAActualizar">
                <label class="form-check-label fs-3" for="inlineCheckbox${i + 1}">${bodega.getNombre()}</label>
            </div>
        </div>`;
                fieldSet.innerHTML += opcion;
            }
            this.tomarSeleccionBodega(fieldSet, bodegasConActualizaciones);
        }
        else {
            this.cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
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
            </div>`;
            this.botonVolverNoBodegas = document.getElementById('volverPantalla');
            this.botonVolverNoBodegas.addEventListener('click', () => {
                renderizarPantalla(this.gestor, this);
            });
            //Mostrar mensaje por pantalla que no hay bodegas a actualizar y mostrar un boton que nos devuelva a la pagina anterior
        }
    }
    mostrarResumenDeActualizacion(vinosAMostrar) {
        this.cuerpo.innerHTML = `<div class="d-flex justify-content-center">
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
  </div>`;
        this.cuerpoTabla = document.getElementById('tablaVinosResumen');
        for (let vino of vinosAMostrar) {
            let maridajesAMostrar = vino.vinoAMostrar
                .getMaridaje()
                .map(maridaje => maridaje.getNombre());
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
        </tr>`;
            const filaNueva = this.cuerpoTabla.insertRow();
            filaNueva.innerHTML = fila;
        }
        this.botonVolverVinos = document.getElementById('volver');
        this.botonVolverVinos.addEventListener('click', () => {
            renderizarPantalla(this.gestor, this);
        });
    }
    mostrarPantallaError() {
        this.cuerpo.innerHTML = `<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">
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
            </div>`;
        this.botonVolverNoApi = document.getElementById('volverPantalla');
        this.botonVolverNoApi.addEventListener('click', () => {
            renderizarPantalla(this.gestor, this);
        });
    }
    tomarSeleccionBodega(fieldSet, bodegasConActualizaciones) {
        this.botonConfirmar = document.getElementById('confirmarBodega');
        this.botonConfirmar.addEventListener('click', () => {
            const radios = fieldSet.querySelectorAll('input[type="radio"]');
            let bodegaSeleccionada = null;
            radios.forEach(radio => {
                const input = radio;
                if (input.checked) {
                    bodegaSeleccionada = input.value;
                }
            });
            if (bodegaSeleccionada) {
                let bodegaAEnviar = bodegasConActualizaciones.find((bodega) => bodega.getNombre().toLowerCase() ===
                    bodegaSeleccionada.toLowerCase());
                this.gestor.tomarSeleccionBodega(bodegaAEnviar);
            }
            else {
                console.log('No ando');
            }
        });
    }
}
