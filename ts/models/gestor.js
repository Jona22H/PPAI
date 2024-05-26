import { dataBodega, dataEnofilos, dataVinoRemoto } from './data/data.js';
console.log('Brenda');
var Gestor = /** @class */ (function () {
    function Gestor() {
        this.bodegaAActualizar = dataBodega[0];
        this.fechaActual = new Date();
        this.vinosEnRemoto = [];
        this.vinosAMostrar = [];
        this.pantalla = undefined;
    }
    Gestor.prototype.opcionImportarActualizacion = function (pantalla) {
        this.getFechaActual();
        this.pantalla = pantalla;
        var bodegasConActualizaciones = this.buscarBodegasConActualizacion(this.fechaActual);
        /*for(var bodega of bodegasConActualizaciones){
                console.log(bodega.getNombre())
            }*/
        //mostrarBodegasConActu(bodegasConActualizaciones)
        pantalla.mostrarBodegasConActu(bodegasConActualizaciones);
    };
    Gestor.prototype.buscarBodegasConActualizacion = function (fechaActual) {
        var bodegasAActualizar = [];
        for (var _i = 0, dataBodega_1 = dataBodega; _i < dataBodega_1.length; _i++) {
            var bodega = dataBodega_1[_i];
            if (bodega.esTiempoDeActualizar(fechaActual)) {
                bodegasAActualizar.push(bodega);
            }
        }
        return bodegasAActualizar;
    };
    Gestor.prototype.getFechaActual = function () {
        var fechaActual = new Date();
        this.fechaActual = fechaActual;
    };
    Gestor.prototype.tomarSeleccionBodega = function (bodegaAActualizar) {
        this.bodegaAActualizar = bodegaAActualizar;
        if (bodegaAActualizar.getNombre() !== 'Los robles') {
            this.obtenerActualizacionVinos();
            this.actualizarVinosDeBodega();
            //console.log(this.vinosAMostrar[0].vinoAMostrar)
        }
        else {
            //En vez de mostrar la tabla vamos a mostrar un mensaje de error respecto a la no respuesta de la API y el boton dira Volver al menú principal
        }
    };
    Gestor.prototype.obtenerActualizacionVinos = function () {
        var _this = this;
        this.vinosEnRemoto = dataVinoRemoto.filter(function (vino) { return vino.getBodega().getNombre() == _this.bodegaAActualizar.getNombre(); });
    };
    // [Varietal1:80, Varietal2:20]
    Gestor.prototype.actualizarVinosDeBodega = function () {
        //vinos a mostrar es [{vino, estado},{vino2, estado}]
        this.vinosAMostrar = this.bodegaAActualizar.actualizarVinos(this.vinosEnRemoto);
        //console.log(this.vinosAMostrar)
        this.bodegaAActualizar.setFechaUltimaActualizacion(new Date());
        var listaVarietales = [];
        for (var _i = 0, _a = this.vinosAMostrar; _i < _a.length; _i++) {
            var vinoEstado = _a[_i];
            var varietal = vinoEstado.vinoAMostrar.getVarietal();
        }
        this.pantalla.mostrarResumenDeActualizacion(this.vinosAMostrar);
    };
    Gestor.prototype.notificarEnofilosSuscriptos = function () {
        var _this = this;
        var nombresUsuariosANotificar = [];
        dataEnofilos.forEach(function (enofilo) {
            if (enofilo.estaSuscriptoABodega(_this.bodegaAActualizar)) {
                var nombreUsuarioEnofilo = enofilo.obtenerNombreUsuario();
                nombresUsuariosANotificar.push(nombreUsuarioEnofilo);
            }
        });
    };
    Gestor.prototype.generarNotificacion = function (InterfazNotificacionPush) {
        var notificacion = "Hay novedades de la bodega ".concat(this.bodegaAActualizar, " en la app");
        InterfazNotificacionPush.notificarActualizacionBodega();
    };
    return Gestor;
}());
export default Gestor;
// var gest = new Gestor()
// gest.tomarSeleccionBodega(dataBodega[1])
// console.log(gest.vinosAMostrar)
