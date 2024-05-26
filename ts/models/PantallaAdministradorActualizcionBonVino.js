console.log('en la pantalla')
var PantallaAdministradorActualizcionBonVino = /** @class */ (function () {
  function PantallaAdministradorActualizcionBonVino() {}
  PantallaAdministradorActualizcionBonVino.prototype.opcionImportarActualizacion =
    function (gestor) {
      this.mostrarPantalla(gestor)
      this.gestor = gestor
    }
  PantallaAdministradorActualizcionBonVino.prototype.mostrarPantalla =
    function (gestor) {
      gestor.opcionImportarActualizacion(this)
    }
  PantallaAdministradorActualizcionBonVino.prototype.mostrarBodegasConActu =
    function (bodegasConActualizaciones) {
      this.cuerpo = document.getElementById('cuerpoModificable')
      if (bodegasConActualizaciones.length > 0) {
        this.cuerpo.innerHTML =
          '<div class="checkbox-container d-flex  flex-column ms-5" id="contenido">\n        <div class="d-flex m-4">\n            <h3>Seleccionar las bodegas a actualizar</h3>\n        </div>\n        <div class="d-flex flex-wrap">\n            <fieldset id="BodegasConActualizacion">\n                \n            </fieldset>\n        </div>\n\n    </div>\n    <div class="d-flex justify-content-end  ">\n                <div class="d-flex col-3  justify-content-between ">\n                    <button class=" btn-bg-color" type="button" id="confirmarBodega">Confirmar</button>\n                </div>\n\n            </div>\n            <div>\n            </div>'
        var fieldSet = document.getElementById('BodegasConActualizacion')
        for (var i = 0; bodegasConActualizaciones.length > i; i++) {
          var bodega = bodegasConActualizaciones[i]
          var opcion =
            '<div class="col-3 ">\n            <div class="form-check form-check-inline ">\n                <input class="form-check-input fs-3 " type="radio" id="inlineCheckbox'
              .concat(i + 1, '" value="')
              .concat(
                bodega.getNombre(),
                '"\n                    name="bodegaAActualizar">\n                <label class="form-check-label fs-3" for="inlineCheckbox1">'
              )
              .concat(
                bodega.getNombre(),
                '</label>\n            </div>\n        </div>'
              )
          fieldSet.innerHTML += opcion
        }
        this.tomarSeleccionBodega(fieldSet, bodegasConActualizaciones)
      } else {
        //Mostrar mensaje por pantalla que no hay bodegas a actualizar y mostrar un boton que nos devuelva a la pagina anterior
      }
    }
  PantallaAdministradorActualizcionBonVino.prototype.mostrarResumenDeActualizacion =
    function (vinosAMostrar) {
      this.cuerpo.innerHTML =
        '<div class="d-flex justify-content-center">\n    <h1>Resumen de Actualizaci\u00F3n</h1>\n  </div>\n  <div class="scrollmenu">\n    <table class="content-table">\n      <thead>\n        <tr>\n          <th scope="col ">Bodega</th>\n          <th scope="col">Nombre del Vino</th>\n          <th scope="col">A\u00F1ada</th>\n          <th scope="col">Fecha De Actualizacion</th>\n          <th scope="col">Imagen Etiqueta</th>\n          <th scope="col">Nota De Cata Bodega</th>\n          <th scope="col">Precio ARS</th>\n          <th scope="col">Puntaje Promedio</th>\n          <th scope="col">Varietales</th>\n          <th scope="col">Maridaje</th>\n          <th scope="col">Estado</th>\n        </tr>\n      </thead>\n      <tbody id="tablaVinosResumen">\n        \n      </tbody>\n    </table>\n  </div>\n  <div class="d-flex justify-content-end">\n    <div class="d-flex col-3 justify-content-end">\n      <button  class="btn-bg-color" type="button" id="volver">Enviar notificaci\u00F3n a usuario</button>\n    </div>\n  </div>'
      var cuerpoTabla = document.getElementById('tablaVinosResumen')
      for (
        var _i = 0, vinosAMostrar_1 = vinosAMostrar;
        _i < vinosAMostrar_1.length;
        _i++
      ) {
        var vino = vinosAMostrar_1[_i]
        var maridajesAMostrar = vino.vinoAMostrar
          .getMaridaje()
          .map(function (maridaje) {
            return maridaje.getNombre()
          })
        var fila = '<tr>\n        <th scope="row">'
          .concat(
            vino.vinoAMostrar.getBodega().getNombre(),
            '</th>\n        <td>'
          )
          .concat(vino.vinoAMostrar.getNombre(), '</td>\n        <td>')
          .concat(vino.vinoAMostrar.getAñada(), '</td>\n        <td>')
          .concat(
            vino.vinoAMostrar.getFechaActualizacion(),
            '</td>\n        <td>'
          )
          .concat(vino.vinoAMostrar.getImagenEtiqueta(), '</td>\n        <td>')
          .concat(vino.vinoAMostrar.getNotaCata(), '</td>\n        <td>$')
          .concat(vino.vinoAMostrar.getPrecio(), '</td>\n        <td>')
          .concat(vino.vinoAMostrar.calcularRanking(), '</td>\n        <td>')
          .concat(vino.varietalesAMostrar.join('\n'), '</td>\n        <td>')
          .concat(maridajesAMostrar, '</td>\n        <td>')
          .concat(vino.estado, '</td>')
        var filaNueva = cuerpoTabla.insertRow()
        filaNueva.innerHTML = fila
      }
    }
  PantallaAdministradorActualizcionBonVino.prototype.tomarSeleccionBodega =
    function (fieldSet, bodegasConActualizaciones) {
      var _this = this
      var boton = document.getElementById('confirmarBodega')
      boton.addEventListener('click', function () {
        var radios = fieldSet.querySelectorAll('input[type="radio"]')
        var bodegaSeleccionada = null
        radios.forEach(function (radio) {
          var input = radio
          if (input.checked) {
            bodegaSeleccionada = input.value
          }
        })
        if (bodegaSeleccionada) {
          var bodegaAEnviar = bodegasConActualizaciones.find(function (bodega) {
            return (
              bodega.getNombre().toLowerCase() ===
              bodegaSeleccionada.toLowerCase()
            )
          })
          _this.gestor.tomarSeleccionBodega(bodegaAEnviar)
        } else {
          console.log('No ando')
        }
      })
    }
  return PantallaAdministradorActualizcionBonVino
})()
export default PantallaAdministradorActualizcionBonVino
