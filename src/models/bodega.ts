import { dataMaridajes, dataVinoEnBD } from './data/data.js'
import Maridaje from './maridaje.js'
import TipoUva from './tipoDeUva.js'
import Vino from './vino.js'

export default class Bodega {
  private descripcion: string
  private historia: string
  private nombre: string
  private periodoActualizacion: number
  private fechaUltimaActualizacion: Date
  private coordenadas: Array<number>
  private region: undefined
  private novedad: undefined

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

  public getCoordenadas(): Array<number> {
    return this.coordenadas
  }

  public setCoordenadas(coordenadas: Array<number>) {
    this.coordenadas = coordenadas
  }

  public contarReseñas() {}

  public mostrarTodosVinos(vinosGlobales: Array<Vino>) {
    return vinosGlobales.filter(vino => vino.getBodega().nombre === this.nombre)
  }

  public crearVino(vinoACrear: Vino) {
    let maridaje = this.buscarMaridaje(vinoACrear)
    let tiposUvas = this.buscarTipoUva(vinoACrear)
    // let a = vinoACrear.getAñada()
    let vinoNuevo = new Vino(
      vinoACrear.getNombre(),
      this,
      vinoACrear.getAñada(),
      new Date(),
      vinoACrear.getImagenEtiqueta(),
      vinoACrear.getNotaCata(),
      vinoACrear.getPrecio(),
      vinoACrear.getReseña(),
      tiposUvas,
      maridaje
    )
    return vinoNuevo
  }

  public buscarMaridaje(vinoACrear: Vino) {
    let maridajesVinoACrear = vinoACrear.getMaridaje()
    let maridajesADevolver: Maridaje[] = []
    maridajesVinoACrear.forEach(maridajeAAsignar => {
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
    varietalVinoACrear.forEach(varietal => {
      let tipoUva = varietal.conocerTipoDeUva()
      let porcentaje = varietal.getPorcentajeComposicion()
      let objetoTipoUva = { uva: tipoUva, porcentaje: porcentaje }
      tiposUvasACrear.push(objetoTipoUva)
    })
    return tiposUvasACrear
  }

  public actualizarVinos(vinosAActualizar: Vino[]): Array<{
    vinoAMostrar: Vino
    estado: String
    varietalesAMostrar: String[]
  }> {
    let vinosActualizados: Array<{
      vinoAMostrar: Vino
      estado: String
      varietalesAMostrar: String[]
    }> = []

    // console.log(dataVinoEnBD[0])
    for (let i = 0; dataVinoEnBD.length > i; i++) {
      let vino = dataVinoEnBD[i]   /* ---------- Creo que en la BD no deberia haber objetos vino, bodega, etc,sino JSON, o por lo menos en las API debe haber JSON */
      if (vino.getBodega().getNombre() !== this.nombre) continue  /* -------- No respeta patron experto, hay que mandarle al vino el nombre de la bodega y que el vino diga si es de esa bodega -------- 
                                                                      ------- Ademas hay que agregar una dependencia entre bodega y vino -------*/
    
      const vinoAActualizar = vinosAActualizar.find(
        v => v.getNombre().toLowerCase() === vino.getNombre().toLowerCase() /* -------- No respeta patron experto, hay que mandarle al vino un nombre y preguntarle si es ese vino -------- */

      )

      if (vinoAActualizar) {
        // alternativa existe vino
        if (!vino.sosVinoAActualizar(vinosAActualizar)) continue

        let varietalAMostrar: String[] = []

        for (let varietal of vino.getVarietal()) { /* NO HAY QUE HACER UNA DEPENDENCIA ENTRE BODEGA Y VARIETAL, EL VINO YA CONOCE SU VARIETAL, 
        osea toda esta parte hay que sacarla y obtener el varietal  del vino*/ 
          let nombreTipoUva = varietal.conocerTipoDeUva().getNombre()
          let porcentaje = varietal.getPorcentajeComposicion()
          varietalAMostrar.push(`${nombreTipoUva}: ${porcentaje}%`)
        }

        vinosActualizados.push({
          vinoAMostrar: vino,
          estado: 'Actualizado',
          varietalesAMostrar: varietalAMostrar
        })

        vino.setPrecio(vinoAActualizar.getPrecio())
        vino.setImagenEtiqueta(vinoAActualizar.getImagenEtiqueta())
        vino.setFechaActualizacion(vinoAActualizar.getFechaActualizacion())
        vino.setNotaCata(vinoAActualizar.getNotaCata())

        vinosAActualizar = vinosAActualizar.filter(
          vino => vino !== vinoAActualizar
        )
      }
    }

    vinosAActualizar.forEach(vinoACrear => { 
      let vinoNuevo = this.crearVino(vinoACrear)

      let varietalAMostrar: String[] = []

      for (let varietal of vinoNuevo.getVarietal()) {/* ---------- creo que habia  problema con el diagrama de secuencia que no esta este loop o algo asi, 
      verificar que lo que aparezca en el codigo sea lo mismo del diagrama*/
        let nombreTipoUva = varietal.conocerTipoDeUva().getNombre()
        let porcentaje = varietal.getPorcentajeComposicion()
        varietalAMostrar.push(`${nombreTipoUva}: ${porcentaje}%`)
      }

      vinosActualizados.push({
        vinoAMostrar: vinoNuevo,
        estado: 'Creado',
        varietalesAMostrar: varietalAMostrar
      })

      dataVinoEnBD.push(vinoNuevo)
    })

    return vinosActualizados
  }

  public esTiempoDeActualizar(fechaActual: Date): boolean {
    let fehcaActualizacion = this.fechaUltimaActualizacion
    fehcaActualizacion.setMonth(
      fehcaActualizacion.getMonth() + this.periodoActualizacion
    )
    return fechaActual > fehcaActualizacion
  }
}
