import Bodega from "./bodega";

export class Siguiendo{
    private fechaInicio: Date
    private fechaFin ?: Date
    private bodega : Bodega

    public constructor(fechaInicio : Date, bodega : Bodega, fechaFin ?: Date,  ){
        this.fechaInicio = fechaInicio;
        this.bodega = bodega;
        this.fechaFin = fechaFin;
    }

}


