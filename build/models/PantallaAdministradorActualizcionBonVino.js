console.log('en la pantalla');
export default class PantallaAdministradorActualizcionBonVino {
    cuerpo;
    gestor;
    opcionImportarActualizacion(gestor) {
        // Es el primer método que se llama al iniciar el CU
        this.mostrarPantalla(gestor);
        this.gestor = gestor;
    }
    mostrarPantalla(gestor) {
        // llama al metodo opcionImportarActualizacion del gestor y manda la pantalla como argumento
        gestor.opcionImportarActualizacion(this);
    }
    mostrarBodegasConActu(bodegasConActualizaciones) {
        // Este metodo es llamado por el gestor dentro del metodo opcionImportarActualizacion
        // muestra las bodegas pasadas por el gestor, las cuales estan en fecha de actualizarse
        this.cuerpo = document.getElementById('cuerpoModificable');
        // Si la cantidad de bodegas es mayor a 0 las muestra como checkbox,
        // sino informa que no hay bodegas en fecha de actulizacion
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
            // Por cada bodega toma el nombre y crea un checkbox
            for (let i = 0; bodegasConActualizaciones.length > i; i++) {
                let bodega = bodegasConActualizaciones[i];
                let opcion = `<div class="col-3 ">
            <div class="form-check form-check-inline ">
                <input class="form-check-input fs-3 " type="radio" id="inlineCheckbox${i + 1}" value="${bodega.getNombre()}"
                    name="bodegaAActualizar">
                <label class="form-check-label fs-3" for="inlineCheckbox1">${bodega.getNombre()}</label>
            </div>
        </div>`;
                fieldSet.innerHTML += opcion;
            }
            this.tomarSeleccionBodega(fieldSet, bodegasConActualizaciones);
        }
        else {
            //Mostrar mensaje por pantalla que no hay bodegas a actualizar y mostrar un boton que nos devuelva a la pagina anterior
        }
    }
    mostrarResumenDeActualizacion(vinosAMostrar) {
        // Muestra los vinos que se actualizaron o se crearon e indica si fueron creados o actualizados
        this.cuerpo.innerHTML = `<div class="d-flex justify-content-center">
    <h1>Resumen de Actualización</h1>
  </div>
  <div class="scrollmenu">
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
      <button  class="btn-bg-color" type="button" id="volver">Enviar notificación a usuario</button>
    </div>
  </div>`;
        let cuerpoTabla = document.getElementById('tablaVinosResumen');
        for (let vino of vinosAMostrar) {
            let maridajesAMostrar = vino.vinoAMostrar
                .getMaridaje()
                .map(maridaje => maridaje.getNombre());
            let fila = `<tr>
        <th scope="row">${vino.vinoAMostrar.getBodega().getNombre()}</th>
        <td>${vino.vinoAMostrar.getNombre()}</td>
        <td>${vino.vinoAMostrar.getAñada()}</td>
        <td>${vino.vinoAMostrar.getFechaActualizacion()}</td>
        <td>${vino.vinoAMostrar.getImagenEtiqueta()}</td>
        <td>${vino.vinoAMostrar.getNotaCata()}</td>
        <td>$${vino.vinoAMostrar.getPrecio()}</td>
        <td>${vino.vinoAMostrar.calcularRanking()}</td>
        <td>${vino.varietalesAMostrar.join('\n')}</td>
        <td>${maridajesAMostrar}</td>
        <td>${vino.estado}</td>`;
            const filaNueva = cuerpoTabla.insertRow();
            filaNueva.innerHTML = fila;
        }
    }
    tomarSeleccionBodega(fieldSet, bodegasConActualizaciones) {
        // Captura el evento CLICK sobre el boton "Confirmar",
        // busca la bodega que conincida con el nombre de la opcion seleccionada
        // y le envia esta bodega al gestor
        const boton = document.getElementById('confirmarBodega');
        boton.addEventListener('click', () => {
            const radios = fieldSet.querySelectorAll('input[type="radio"]');
            let bodegaSeleccionada = null;
            radios.forEach(radio => {
                const input = radio;
                if (input.checked) {
                    bodegaSeleccionada = input.value;
                }
            });
            // aqui busca entre las bodegas con actulizaciones la que coincida con el nombre del check seleccionado
            // ESTE IF NO SE QUE HACE ?????????????????????????????????????
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
