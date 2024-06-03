import { dataMaridajes, dataVinoEnBD } from './data/data.js';
import Vino from './vino.js';
export default class Bodega {
    descripcion;
    historia;
    nombre;
    periodoActualizacion;
    fechaUltimaActualizacion;
    coordenadas;
    region;
    novedad;
    constructor(nom, desc, hist, perAct, fecUltAct, coordenadas) {
        this.descripcion = desc;
        this.historia = hist;
        this.nombre = nom;
        this.periodoActualizacion = perAct;
        this.fechaUltimaActualizacion = fecUltAct;
        this.coordenadas = coordenadas;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(v) {
        this.descripcion = v;
    }
    getHistoria() {
        return this.historia;
    }
    setHistoria(v) {
        this.historia = v;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(v) {
        this.nombre = v;
    }
    getPeriodoActualizacion() {
        return this.periodoActualizacion;
    }
    setPeriodoActualizacion(v) {
        this.periodoActualizacion = v;
    }
    getFechaUltimaActualizacion() {
        return this.fechaUltimaActualizacion;
    }
    setFechaUltimaActualizacion(v) {
        this.fechaUltimaActualizacion = v;
    }
    getCoordenadas() {
        return this.coordenadas;
    }
    setCoordenadas(coordenadas) {
        this.coordenadas = coordenadas;
    }
    contarReseñas() { }
    mostrarTodosVinos(vinosGlobales) {
        return vinosGlobales.filter(vino => vino.getBodega().nombre === this.nombre);
    }
    crearVino(vinoACrear) {
        let maridaje = this.buscarMaridaje(vinoACrear);
        let tiposUvas = this.buscarTipoUva(vinoACrear);
        // let a = vinoACrear.getAñada()
        let vinoNuevo = new Vino(vinoACrear.getNombre(), this, vinoACrear.getAñada(), new Date(), vinoACrear.getImagenEtiqueta(), vinoACrear.getNotaCata(), vinoACrear.getPrecio(), vinoACrear.getReseña(), tiposUvas, maridaje);
        return vinoNuevo;
    }
    buscarMaridaje(vinoACrear) {
        let maridajesVinoACrear = vinoACrear.getMaridaje();
        let maridajesADevolver = [];
        maridajesVinoACrear.forEach(maridajeAAsignar => {
            for (let i = 0; dataMaridajes.length > i; i++) {
                let maridajeEnBd = dataMaridajes[i];
                if (maridajeEnBd.sosMaridaje(maridajeAAsignar.getNombre())) {
                    maridajesADevolver.push(maridajeEnBd);
                    break;
                }
            }
        });
        return maridajesADevolver;
    }
    buscarTipoUva(vinoACrear) {
        let varietalVinoACrear = vinoACrear.getVarietal();
        let tiposUvasACrear = [];
        varietalVinoACrear.forEach(varietal => {
            let tipoUva = varietal.conocerTipoDeUva();
            let porcentaje = varietal.getPorcentajeComposicion();
            let objetoTipoUva = { uva: tipoUva, porcentaje: porcentaje };
            tiposUvasACrear.push(objetoTipoUva);
        });
        return tiposUvasACrear;
    }
    actualizarVinos(vinosAActualizar) {
        let vinosActualizados = [];
        // console.log(dataVinoEnBD[0])
        for (let i = 0; dataVinoEnBD.length > i; i++) {
            let vino = dataVinoEnBD[i];
            if (vino.getBodega().getNombre() !== this.nombre)
                continue;
            const vinoAActualizar = vinosAActualizar.find(v => v.getNombre().toLowerCase() === vino.getNombre().toLowerCase());
            if (vinoAActualizar) {
                // alternativa existe vino
                if (!vino.sosVinoAActualizar(vinosAActualizar))
                    continue;
                let varietalAMostrar = [];
                for (let varietal of vino.getVarietal()) {
                    let nombreTipoUva = varietal.conocerTipoDeUva().getNombre();
                    let porcentaje = varietal.getPorcentajeComposicion();
                    varietalAMostrar.push(`${nombreTipoUva}: ${porcentaje}%`);
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
                vinosAActualizar = vinosAActualizar.filter(vino => vino !== vinoAActualizar);
            }
        }
        vinosAActualizar.forEach(vinoACrear => {
            let vinoNuevo = this.crearVino(vinoACrear);
            let varietalAMostrar = [];
            for (let varietal of vinoNuevo.getVarietal()) {
                let nombreTipoUva = varietal.conocerTipoDeUva().getNombre();
                let porcentaje = varietal.getPorcentajeComposicion();
                varietalAMostrar.push(`${nombreTipoUva}: ${porcentaje}%`);
            }
            vinosActualizados.push({
                vinoAMostrar: vinoNuevo,
                estado: 'Creado',
                varietalesAMostrar: varietalAMostrar
            });
            dataVinoEnBD.push(vinoNuevo);
        });
        return vinosActualizados;
    }
    esTiempoDeActualizar(fechaActual) {
        let fehcaActualizacion = this.fechaUltimaActualizacion;
        fehcaActualizacion.setMonth(fehcaActualizacion.getMonth() + this.periodoActualizacion);
        return fechaActual > fehcaActualizacion;
    }
}
