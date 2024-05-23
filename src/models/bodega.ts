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
  

  constructor(nom: string, desc: string, hist: string,  perAct: number, fecUltAct: Date) {
    this.descripcion = desc
    this.historia = hist
    this.nombre = nom
    this.periodoActualizacion = perAct
    this.fechaUltimaActualizacion = fecUltAct
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

  public contarReseñas(){

  }

  public mostrarTodosVinos(vinosGlobales: Array<Vino>){
    return vinosGlobales.filter(vino => (vino.getBodega()).nombre === this.nombre)
  }
  
  public crearVino(vinosACrear){
    vinosACrear.forEach(vinoACrear => {
      let listaMaridaje: Maridaje[] = this.buscarMaridaje(vinoACrear)
      let listaTipoUva: TipoUva[] = []
      this.buscarTipoUva()
      let vinoNuevo = new Vino()
      dataVino.push(vinoNuevo)
  });
  }

  public buscarMaridaje(vinoACrear: Vino){
    let maridajesVinoACrear = vinoACrear.getMaridaje()
    let maridajesADevolver: Maridaje[] = []
    maridajesVinoACrear.forEach(maridajeAAsignar => {
       for(let i = 0; dataMaridajes.length > i; i++){
        let maridajeEnBd = dataMaridajes[i]
        if (maridajeEnBd.sosMaridaje(maridajeAAsignar.getNombre())){
          maridajesADevolver.push(maridajeEnBd)
          break
        }
       }
      })
    return maridajesADevolver
  }

  public buscarTipoUva(){

  }

  
  public actualizarVinos(vinosAActualizar: Vino[]) {
    for (let vino of dataVino) {
      if (vino.getBodega().getNombre() !== this.nombre) continue

      const vinoAActualizar = vinosAActualizar.find(v => v.getNombre() === vino.getNombre())

      if (vinoAActualizar) {
        // alternativa existe vino  
        if (!vino.sosVinoAActualizar(vinosAActualizar)) continue

        vino.setPrecio(vinoAActualizar.getPrecio())
        vino.setImagenEtiqueta(vinoAActualizar.getImagenEtiqueta())
        vino.setFechaActualizacion(vinoAActualizar.getFechaActualizacion())
        vino.setNotaCata(vinoAActualizar.getNotaCata())
        vinosAActualizar = vinosAActualizar.filter(vinos => vino !== vinoAActualizar)
      } else {
        // alternativa no existe vino
        /* 
          @GONZA:
          podriamos cambiar el crearVino para que solo reciba un vino, en vez de un array de vinos, entonces acá simplemente podemos hacer todo eso
          porq si no habría que ir agrupandolos en un array ponele y mandarselos acá, o llamar a la función tipo crearVino([vino]) y es medio al pedo
        */
      }
    }
    vinosAActualizar.forEach(vinoACrear => {
      this.crearVino(vinoACrear)
    })
  }
}