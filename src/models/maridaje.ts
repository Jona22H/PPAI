import  Vino  from "./vino";

export default class Maridaje{
    private nombre: string;
    private descripcion: string;
    
    constructor(nom: string, desc: string = ""){
        this.nombre = nom;
        this.descripcion = desc;
    }
    
    public getNombre(){
        return this.nombre
    }

    public getDescripcion(){
        return this.descripcion
    }

    public setNombre(nom: string){
        this.nombre = nom
    }

    public setDescripcion(desc: string){
        return this.nombre
    }

    public sosMaridaje(tipoAComprobar: string): boolean{
        return (this.nombre === tipoAComprobar)
    }

    public maridaConVino(vino: Vino): boolean {
        let maridajes = vino.getMaridaje()
        let maridajesNombres = maridajes.map(elemento => elemento.nombre)
        return (maridajesNombres.includes(this.nombre))
    }


}


