import { dataMaridajes, dataVino } from "./data/data"
import Maridaje from "./maridaje"
import { TipoUva } from "./tipoDeUva"
import Varietal from "./varietal"
import Vino from "./vino"

export default class Bodega {
  private descripcion: string
  private historia: string
  private nombre: string
  private periodoActualizacion: number
  private fechaUltimaActualizacion: Date
  private coordenadas: Array<number>

  constructor(
    nom: string,
    desc: string,
    hist: string,
    perAct: number,
    fecUltAct: Date,
    coordenadas: Array<number>
  ) {
    this.descripcion = desc
    this.historia = hist
    this.nombre = nom
    this.periodoActualizacion = perAct
    this.fechaUltimaActualizacion = fecUltAct
    this.coordenadas = coordenadas
  }

  public getDescripcion(): string {
    return this.descripcion
  }
  public setDescripcion(v: string) {
    this.descripcion = v
  }

  public getHistoria(): string {
    return this.historia
  }
  public setHistoria(v: string) {
    this.historia = v
  }

  public getNombre(): string {
    return this.nombre
  }
  public setNombre(v: string) {
    this.nombre = v
  }

  public getPeriodoActualizacion(): number {
    return this.periodoActualizacion
  }
  public setPeriodoActualizacion(v: number) {
    this.periodoActualizacion = v
  }

  public getFechaUltimaActualizacion(): Date {
    return this.fechaUltimaActualizacion
  }
  public setFechaUltimaActualizacion(v: Date) {
    this.fechaUltimaActualizacion = v
  }

  public getCoordenadas(): Array<number>{
    return this.coordenadas
  }

  public setCoordenadas(coordenadas: Array<number>){
    this.coordenadas = coordenadas
  }

  public contarReseñas() {}

  public mostrarTodosVinos(vinosGlobales: Array<Vino>) {
    return vinosGlobales.filter(
      (vino) => vino.getBodega().nombre === this.nombre
    )
  }

  public crearVino(vinoACrear: Vino) {
    let maridaje = this.buscarMaridaje(vinoACrear)
    let tiposUvas = this.buscarTipoUva(vinoACrear)
    let vinoNuevo = new Vino(
      vinoACrear.getAñada(),
      vinoACrear.getFechaActualizacion(),
      vinoACrear.getImagenEtiqueta(),
      vinoACrear.getNombre(),
      vinoACrear.getNotaCata(),
      vinoACrear.getPrecio(),
      vinoACrear.getReseña(),
      this,
      tiposUvas,
      maridaje
    )
    return vinoNuevo
  }

  public buscarMaridaje(vinoACrear: Vino) {
    let maridajesVinoACrear = vinoACrear.getMaridaje()
    let maridajesADevolver: Maridaje[] = []
    maridajesVinoACrear.forEach((maridajeAAsignar) => {
      for (let i = 0; dataMaridajes.length > i; i++) {
        let maridajeEnBd = dataMaridajes[i]
        if (maridajeEnBd.sosMaridaje(maridajeAAsignar.getNombre())) {
          maridajesADevolver.push(maridajeEnBd)
          break
        }
      }
    })
    return maridajesADevolver
  }

  public buscarTipoUva(vinoACrear: Vino) {
    let varietalVinoACrear = vinoACrear.getVarietal()
    let tiposUvasACrear: Array<{ uva: TipoUva; porcentaje: number }> = []
    varietalVinoACrear.forEach((varietal) => {
      let tipoUva = varietal.getTipoUva()
      let porcentaje = varietal.getPorcentajeComposicion()
      let objetoTipoUva = { uva: tipoUva, porcentaje: porcentaje }
      tiposUvasACrear.push(objetoTipoUva)
    })
    return tiposUvasACrear
  }

  public actualizarVinos(vinosAActualizar: Vino[]) {
    for (let vino of dataVino) {
      if (vino.getBodega().getNombre() !== this.nombre) continue

      const vinoAActualizar = vinosAActualizar.find(
        (v) => v.getNombre() === vino.getNombre()
      )

      if (vinoAActualizar) {
        // alternativa existe vino
        if (!vino.sosVinoAActualizar(vinosAActualizar)) continue

        vino.setPrecio(vinoAActualizar.getPrecio())
        vino.setImagenEtiqueta(vinoAActualizar.getImagenEtiqueta())
        vino.setFechaActualizacion(vinoAActualizar.getFechaActualizacion())
        vino.setNotaCata(vinoAActualizar.getNotaCata())
        vinosAActualizar = vinosAActualizar.filter(
          (vino) => vino !== vinoAActualizar
        )
      }
    }
    vinosAActualizar.forEach((vinoACrear) => {
      let vinoNuevo = this.crearVino(vinoACrear)
      dataVino.push(vinoNuevo)
    })
  }
}
