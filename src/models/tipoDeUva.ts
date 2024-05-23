export class TipoUva{
    private descripcion: string;
    private nombre: string;

    constructor(nom: string, desc: string = ""){
        this.nombre = nom;
        this.descripcion = desc;
    }

    public getNombre(){
        return this.nombre
    }
    public getDescripcion() : string{
        return this.descripcion
    }

    public setNombre(nom : string){
        this.nombre = nom;
    }

    public setDescripcion(desc : string){
        this.descripcion = desc;
    }

    public sosTipoUva(nombreTipoUva: string): boolean{
       return (this.nombre === nombreTipoUva) 
    }
}

/*
console.log("hola")
let tipoMalvec = new TipoUva("malvec", "buena uva")
const nom = tipoMalvec.getNombre()
console.log(nom)

// let tipoMalvec = new TipoUva("malvec", "buena uva")
// const nom = tipoMalvec.getNombre()
// console.log(nom)

// let tipoBLanco = new TipoUva("blanco", "mala uva")

// console.log(tipoBLanco.sosTipoUva("malvec"))*/
