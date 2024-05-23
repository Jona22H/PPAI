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
    vinosACrear.forEach(Vino => {
      let listaMaridaje: Maridaje[] = []
      let listaTipoUva: TipoUva[] = []
      this.buscarMaridaje()
      this.buscarTipoUva()
      let vinoNuevo = new Vino()
      dataVino.push(vinoNuevo)
  });
  }

  public buscarMaridaje(){

  }

  public buscarTipoUva(){

  }

}