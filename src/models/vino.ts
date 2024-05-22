import Bodega from "./bodega.ts"
import Maridaje from "./maridaje.ts"
import Reseña from "./reseña.ts"
import Varietal from "./varietal.ts"
import { TipoUva } from "./tipoDeUva.ts"


class Vino{
  private nombre: string
  private añada: number
  private fechaActualizacion: number  
  private imagenEtiqueta: string
  private notaDeCataBodega: string
  private precioARS: number
  private reseña: Array<Reseña>
  private bodega: Bodega
  private varietal: Array<Varietal>
  private maridaje: Array<Maridaje>

  constructor(añada: number, fechaActualizacion: number, imagenEtiqueta:string, nombre:string, notaDeCataBodega: string, 
    precioARS: number, reseña:Array<Reseña>, bodega: Bodega, tiposUvas:[{uva: TipoUva, porcentaje: number}], maridaje: Array<Maridaje>){
      this.nombre = nombre
      this.fechaActualizacion = fechaActualizacion
      this.añada = añada
      this.imagenEtiqueta = imagenEtiqueta
      this.notaDeCataBodega = notaDeCataBodega
      this.precioARS = precioARS
      this.reseña = reseña
      this.bodega = bodega
      this.varietal = this.crearVarietal(tiposUvas)
      this.maridaje = maridaje
    }
  public crearVarietal(listaTiposUvas: Array<{uva:TipoUva, porcentaje: number}>){
    let varietales: Varietal[] = []
    listaTiposUvas.forEach(element => {
      const nuevoVarietal = new Varietal(element.porcentaje, element.uva.getDescripcion(), element.uva)
      varietales.push(nuevoVarietal)
    });
    return varietales
  }

  public calcularRanking(){
    
    let contador = 0
    let suma = 0

    this.reseña.forEach(element => {
      contador++
      let puntaje = element.getPuntaje()
      suma += puntaje
    })
    return Math.round((suma/contador))

  }

  public compararEtiqueta(etiqueta: string){

    return this.imagenEtiqueta === etiqueta

  }

  public esDeBodega(nombreBodega: string){

  }

  public esDeRegionVitivinicola(nombreRegion: string){
  }

  public getNombre(){
    return this.nombre
  }
  
  public getFechaActualizacion(){
    return this.fechaActualizacion
  }
  
  public getAñada(){
    return this.añada
  }

  public getImagenEtiqueta(){
    return this.imagenEtiqueta
  }

  public getNotaCata(){
    return this.notaDeCataBodega
  }

  public getPrecio(){
    return this.precioARS
  }

  public getReseña(){
    return this.reseña
  }

  public getBodega(){
    return this.bodega
  }

  public getVarietal(){
    return this.varietal
  }

  public getMaridaje(){
    return this.maridaje
  }

  public setNombre(nombre: string){
    this.nombre = nombre
  }
  
  public setFechaActualizacion(fechaActualizacion: number){
    this.fechaActualizacion = fechaActualizacion
  }
  
  public setAñada(añada: number){
    this.añada = añada
  }

  public setImagenEtiqueta(imagenEtiqueta: string){
    this.imagenEtiqueta = imagenEtiqueta
  }

  public setNotaCata(notaDeCataBodega: string){
    this.notaDeCataBodega = notaDeCataBodega
  }

  public setPrecio(precio: number){
    this.precioARS = precio
  }

  public setReseña(reseñas: Array<Reseña>){
    this.reseña = reseñas 
  }

  public setBodega(bodega: Bodega){
    this.bodega = bodega
  }

  public setVarietal(varietal: Array<Varietal>){
    this.varietal = varietal
  }

  public setMaridaje(maridaje: Array<Maridaje>){
    this.maridaje = maridaje
  }

  public sosVinoAActualizar(vinosAActualizar: Array<Vino>){
    const nombresVinosActualizar = vinosAActualizar.map(element => element.nombre)
    return nombresVinosActualizar.includes(this.nombre)  
  }

}
