import Bodega from './bodega.js'
import { dataVinoRemoto } from './data/data.js'
import Vino from './vino.js'

export default class InterfazSistemaDeBodega {
  private vinosAActualizar: Vino[] = []

  public obtenerActualizacionVinos(bodegaAActualizar: Bodega) {
    this.vinosAActualizar = dataVinoRemoto.filter(
      vino => vino.getBodega().getNombre() == bodegaAActualizar.getNombre()
    )
    return this.vinosAActualizar
  }
}
