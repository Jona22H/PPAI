export class TipoUva{
    private _descripcion: string;
    private _nombre: string;

    constructor(nom: string, desc: string = ""){
        this._nombre = nom;
        this._descripcion = desc;
    }

    public getNombre(){
        return this._nombre
    }
    public getDescripcion() : string{
        return this._descripcion
    }

    public setNombre(nom : string){
        this._nombre = nom;
    }

    public setDescripcion(desc : string){
        this._descripcion = desc;
    }
}
/* 
console.log("hola")
let tipoMalvec = new TipoUva("malvec", "buena uva")
const nom = tipoMalvec.getNombre()
console.log(nom)



tipoMalvec.setDescripcion("otra Descripcion")
const desc = tipoMalvec.getDescripcion()
console.log(desc)
*/