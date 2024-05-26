import { dataMaridajes, dataVinoEnBD } from './data/data.js';
import Vino from './vino.js';
var Bodega = /** @class */ (function () {
    function Bodega(nom, desc, hist, perAct, fecUltAct, coordenadas) {
        this.descripcion = desc;
        this.historia = hist;
        this.nombre = nom;
        this.periodoActualizacion = perAct;
        this.fechaUltimaActualizacion = fecUltAct;
        this.coordenadas = coordenadas;
    }
    Bodega.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Bodega.prototype.setDescripcion = function (v) {
        this.descripcion = v;
    };
    Bodega.prototype.getHistoria = function () {
        return this.historia;
    };
    Bodega.prototype.setHistoria = function (v) {
        this.historia = v;
    };
    Bodega.prototype.getNombre = function () {
        return this.nombre;
    };
    Bodega.prototype.setNombre = function (v) {
        this.nombre = v;
    };
    Bodega.prototype.getPeriodoActualizacion = function () {
        return this.periodoActualizacion;
    };
    Bodega.prototype.setPeriodoActualizacion = function (v) {
        this.periodoActualizacion = v;
    };
    Bodega.prototype.getFechaUltimaActualizacion = function () {
        return this.fechaUltimaActualizacion;
    };
    Bodega.prototype.setFechaUltimaActualizacion = function (v) {
        this.fechaUltimaActualizacion = v;
    };
    Bodega.prototype.getCoordenadas = function () {
        return this.coordenadas;
    };
    Bodega.prototype.setCoordenadas = function (coordenadas) {
        this.coordenadas = coordenadas;
    };
    Bodega.prototype.contarReseñas = function () { };
    Bodega.prototype.mostrarTodosVinos = function (vinosGlobales) {
        var _this = this;
        return vinosGlobales.filter(function (vino) { return vino.getBodega().nombre === _this.nombre; });
    };
    Bodega.prototype.crearVino = function (vinoACrear) {
        var maridaje = this.buscarMaridaje(vinoACrear);
        var tiposUvas = this.buscarTipoUva(vinoACrear);
        var a = vinoACrear.getAñada();
        var vinoNuevo = new Vino(vinoACrear.getNombre(), this, vinoACrear.getAñada(), new Date(), vinoACrear.getImagenEtiqueta(), vinoACrear.getNotaCata(), vinoACrear.getPrecio(), vinoACrear.getReseña(), tiposUvas, maridaje);
        return vinoNuevo;
    };
    Bodega.prototype.buscarMaridaje = function (vinoACrear) {
        var maridajesVinoACrear = vinoACrear.getMaridaje();
        var maridajesADevolver = [];
        maridajesVinoACrear.forEach(function (maridajeAAsignar) {
            for (var i = 0; dataMaridajes.length > i; i++) {
                var maridajeEnBd = dataMaridajes[i];
                if (maridajeEnBd.sosMaridaje(maridajeAAsignar.getNombre())) {
                    maridajesADevolver.push(maridajeEnBd);
                    break;
                }
            }
        });
        return maridajesADevolver;
    };
    Bodega.prototype.buscarTipoUva = function (vinoACrear) {
        var varietalVinoACrear = vinoACrear.getVarietal();
        var tiposUvasACrear = [];
        varietalVinoACrear.forEach(function (varietal) {
            var tipoUva = varietal.getTipoUva();
            var porcentaje = varietal.getPorcentajeComposicion();
            var objetoTipoUva = { uva: tipoUva, porcentaje: porcentaje };
            tiposUvasACrear.push(objetoTipoUva);
        });
        return tiposUvasACrear;
    };
    Bodega.prototype.actualizarVinos = function (vinosAActualizar) {
        var _this = this;
        var vinosActualizados = [];
        var _loop_1 = function (i) {
            var vino = dataVinoEnBD[i];
            if (vino.getBodega().getNombre() !== this_1.nombre)
                return "continue";
            var vinoAActualizar = vinosAActualizar.find(function (v) { return v.getNombre().toLowerCase() === vino.getNombre().toLowerCase(); });
            if (vinoAActualizar) {
                // alternativa existe vino
                if (!vino.sosVinoAActualizar(vinosAActualizar))
                    return "continue";
                var varietalAMostrar = [];
                for (var _i = 0, _a = vino.getVarietal(); _i < _a.length; _i++) {
                    var varietal = _a[_i];
                    var nombreTipoUva = varietal.getTipoUva().getNombre();
                    var porcentaje = varietal.getPorcentajeComposicion();
                    varietalAMostrar.push("".concat(nombreTipoUva, ": ").concat(porcentaje, "%"));
                }
                vinosActualizados.push({
                    vinoAMostrar: vino,
                    estado: 'Actualizado',
                    varietalesAMostrar: varietalAMostrar
                });
                vino.setPrecio(vinoAActualizar.getPrecio());
                vino.setImagenEtiqueta(vinoAActualizar.getImagenEtiqueta());
                vino.setFechaActualizacion(vinoAActualizar.getFechaActualizacion());
                vino.setNotaCata(vinoAActualizar.getNotaCata());
                vinosAActualizar = vinosAActualizar.filter(function (vino) { return vino !== vinoAActualizar; });
            }
        };
        var this_1 = this;
        // console.log(dataVinoEnBD[0])
        for (var i = 0; dataVinoEnBD.length > i; i++) {
            _loop_1(i);
        }
        vinosAActualizar.forEach(function (vinoACrear) {
            var vinoNuevo = _this.crearVino(vinoACrear);
            var varietalAMostrar = [];
            for (var _i = 0, _a = vinoNuevo.getVarietal(); _i < _a.length; _i++) {
                var varietal = _a[_i];
                var nombreTipoUva = varietal.getTipoUva().getNombre();
                var porcentaje = varietal.getPorcentajeComposicion();
                varietalAMostrar.push("".concat(nombreTipoUva, ": ").concat(porcentaje, "%"));
            }
            vinosActualizados.push({
                vinoAMostrar: vinoNuevo,
                estado: 'Creado',
                varietalesAMostrar: varietalAMostrar
            });
            dataVinoEnBD.push(vinoNuevo);
        });
        return vinosActualizados;
    };
    Bodega.prototype.esTiempoDeActualizar = function (fechaActual) {
        var fehcaActualizacion = this.fechaUltimaActualizacion;
        fehcaActualizacion.setMonth(fehcaActualizacion.getMonth() + this.periodoActualizacion);
        return fechaActual > fehcaActualizacion;
    };
    return Bodega;
}());
export default Bodega;
