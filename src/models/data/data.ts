import { Siguiendo } from "../siguiendo"
import { TipoUva } from "../tipoDeUva"
import  Varietal  from "../varietal"
import Bodega from "../bodega"
import Reseña from "../reseña"
import { Enofilo } from "../enofilo"
import { Usuario } from "../usuario"
import Maridaje from "../maridaje"
import Vino from "../vino"


export const dataUsuarios = [new Usuario('1111', 'Gonzalo', true, '-')]

export const dataEnofilos = [new Enofilo('zavala','-', 'Gonzalo', dataUsuarios[0])]

export const dataTipoUva = [
    
    new TipoUva("Chardonnay", "Versátil y reconocida. Vinos blancos secos y cremosos con notas de frutas cítricas y manzanas") 
    ,
    new TipoUva("Moscatel", "Intenso y aromático. Vinos blancos dulces con sabores a uva, albaricoque y miel.")
    ,
    new TipoUva("Merlot", "Suave y accesible. Uva tinta versátil que ofrece vinos con sabores a ciruelas, cerezas negras y taninos suaves.")
    ,
    new TipoUva("Malbec", "acidez equilibrada y taninos suaves")

]

export const dataVarietal = [
    new Varietal(15, "descripcion de este varietal", dataTipoUva[0]),
    new Varietal(18, "otra descripcion varietal", dataTipoUva[1]),
    new Varietal(25, "esta es la descripcion de varietal", dataTipoUva[2]),
]

export const dataBodega = [
    new Bodega("Los olmos","una linda bodega", "tiene muchos años",3,new Date(2019,5,19)),
    new Bodega("Los platanos","la mejor de todas", "ha ganado muchos premios",3,new Date(2024,5,10)),
    new Bodega("Los robles","una bodega humilde", "estan recien arrancando",3,new Date(2022,7,14))
]

export const dataSiguiendo = [
    new Siguiendo(new Date (2020,9,23), dataBodega[0],undefined,dataEnofilos[0],''),
    new Siguiendo(new Date(2021,2,3), dataBodega[2],undefined,dataEnofilos[0],'' )
]

export const dataReseñas = [ 
    new Reseña('El mejor vino que probé en toda mi vida',true,new Date(),5),
    new Reseña('El peor vino que probé en toda mi vida',false,new Date(),1),
    new Reseña('Un vino más del monton, ni fu ni fa',true,new Date(),3),
    new Reseña('epectacula',false,new Date(),5)
]

export const dataMaridajes = [
    new Maridaje('albondigas con salsa', 'Que no combina con albondigas con salsa'),
    new Maridaje('higos', 'una mezcla atrevida pero seductora al ojo experto'),
    new Maridaje('fresas', 'una combinacion segura pèro deliciosa para aquellos que le gustan los clasicos')
]

export const dataVino: Vino[] = []

/*  fechaInicio : Date, bodega : Bodega, fechaFin ?: Date,  ) */
/*
for (let tipo of dataTipoUva){
    const nom = tipo.getNombre()
    console.log(nom)
    
    

}

dataTipoUva[1].setNombre("nuevoNombre")
const nom = dataTipoUva[1].getNombre()
console.log(nom)*/