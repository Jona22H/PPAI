import { dataVinoRemoto } from './data/data.js';
export default class InterfazSistemaDeBodega {
    vinosAActualizar = [];
    obtenerActualizacionVinos(bodegaAActualizar) {
        this.vinosAActualizar = dataVinoRemoto.filter(vino => vino.getBodega().getNombre() == bodegaAActualizar.getNombre());
        return this.vinosAActualizar;
    }
}
