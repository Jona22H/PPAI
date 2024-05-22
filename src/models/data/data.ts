import { TipoUva } from "../tipoDeUva"
export const dataTipoUva2 = [
    {
        nombre : "Chardonnay",
        descripcion : "Versátil y reconocida. Vinos blancos secos y cremosos con notas de frutas cítricas y manzanas"
    },
    {
        nombre : "Moscatel",
        descripcion : "Intenso y aromático. Vinos blancos dulces con sabores a uva, albaricoque y miel."
    },
    {
        nombre : "Merlot",
        descripcion : "Suave y accesible. Uva tinta versátil que ofrece vinos con sabores a ciruelas, cerezas negras y taninos suaves."
    }
]

export const dataTipoUva = [
    
    new TipoUva("Chardonnay", "Versátil y reconocida. Vinos blancos secos y cremosos con notas de frutas cítricas y manzanas") 
    ,
    new TipoUva("Moscatel", "Intenso y aromático. Vinos blancos dulces con sabores a uva, albaricoque y miel.")
    ,
    new TipoUva("Merlot", "Suave y accesible. Uva tinta versátil que ofrece vinos con sabores a ciruelas, cerezas negras y taninos suaves.")

]


for (let tipo of dataTipoUva){
    const nom = tipo.getNombre()
    console.log(nom)
    
    

}

dataTipoUva[1].setNombre("nuevoNombre")
const nom = dataTipoUva[1].getNombre()
console.log(nom)