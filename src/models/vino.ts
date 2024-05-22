import Bodega from "./bodega.ts"
import Maridaje from "./maridaje.ts"
import Reseña from "./reseña.ts"
import Varietal from "./varietal.ts"


class Vino{
  private añada: number
  private fechaActualizacion: number  
  private imagenEtiqueta: string
  private nombre: string
  private notaDeCataBodega: string
  private precioARS: number
  private reseña: Reseña
  private bodega: Bodega
  private varietal: Varietal
  private maridaje: Maridaje

}