import  TipoUva  from "./tipoDeUva";

export default class Varietal{
    private _descripcion: string;
    private porcentajeComposicion: number;
    private tipoUva : TipoUva;

    constructor(porc: number, desc: string = "", tipoUva: TipoUva){
        this.porcentajeComposicion = porc;
        this._descripcion = desc;
        this.tipoUva = tipoUva;
    }

    public getPorcentajeComposicion(){
        return this.porcentajeComposicion
    }
    public getDescripcion() : string{
        return this._descripcion
    }

    public setPorcentajeComposicion(porc : number){
        this.porcentajeComposicion = porc;
    }

    public setDescripcion(desc : string){
        this._descripcion = desc;
    }

    public getTipoUva(){
        return this.tipoUva
    }

    public setTipoUva(tipo : TipoUva){
        this.tipoUva = tipo;
    }
}

//let vari = new Varietal(15.8, "lalalal")
//console.log(vari.getPorcentajeComposicion())