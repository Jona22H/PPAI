import Bodega from "./bodega";
import {Enofilo} from "./enofilo"

export class Siguiendo{
    private fechaInicio: Date
    private fechaFin ?: Date
    private bodega : Bodega
    private enofilo : Enofilo
    private sommelier: string 

    public constructor(fechaInicio : Date, bodega : Bodega, fechaFin ?: Date, enofilo : Enofilo, sommelier : string ){
        this.fechaInicio = fechaInicio;
        this.bodega = bodega;
        this.fechaFin = fechaFin;
        this.enofilo = enofilo
        this.sommelier = sommelier
    }

    public getFechaInicio() {
        return this.fechaInicio
    }

      public setFechaInicio(v: Date) {
        this.fechaInicio = v
    }

    public getEnofilo(){
        return this.enofilo
    }

    public setEnofilo(enofilo : Enofilo){
        this.enofilo = enofilo
    }

    public getFechaFin() {
        return this.fechaFin
    }

    public setFechaFin(v: Date) {
        this.fechaFin = v
    }

    public getBodega() {
        return this.bodega
    }
      
    public setBodega(bodega: Bodega) {
        this.bodega = bodega
    }

    public getSommelier(){
        return this.sommelier
    }

    public setSommelier(sommelier : string){
        this.sommelier = sommelier
    }

    public sosDeSommelier(sommelier: string): boolean{
        return (this.sommelier === sommelier)
    }

    // ver

    public sosDeAmigo(enofilo : Enofilo): boolean{
        return (this.enofilo === enofilo)
    }

    
    public sosDeBodega(bodega : Bodega) : boolean{
        return (this.bodega === bodega)
        
    }

  
}


