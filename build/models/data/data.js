import Siguiendo from '../siguiendo.js';
import TipoUva from '../tipoDeUva.js';
import Varietal from '../varietal.js';
import Bodega from '../bodega.js';
import Reseña from '../reseña.js';
import Enofilo from '../enofilo.js';
import Usuario from '../usuario.js';
import Maridaje from '../maridaje.js';
import Vino from '../vino.js';
export const dataUsuarios = [
    new Usuario('1111', 'Gonzalo', true, '-'),
    new Usuario('2222', 'Alan', true, '-')
];
export const dataEnofilos = [
    new Enofilo('zavala', '-', 'Gonzalo', dataUsuarios[0]),
    new Enofilo('moyano', 'https://http.cat/400.jpg', 'Alan', dataUsuarios[1])
];
export const dataTipoUva = [
    new TipoUva('Chardonnay', 'Versátil y reconocida. Vinos blancos secos y cremosos con notas de frutas cítricas y manzanas'),
    new TipoUva('Moscatel', 'Intenso y aromático. Vinos blancos dulces con sabores a uva, albaricoque y miel.'),
    new TipoUva('Merlot', 'Suave y accesible. Uva tinta versátil que ofrece vinos con sabores a ciruelas, cerezas negras y taninos suaves.'),
    new TipoUva('Malbec', 'acidez equilibrada y taninos suaves')
];
export const dataVarietal = [
    new Varietal(15, 'descripcion de este varietal', dataTipoUva[0]),
    new Varietal(18, 'otra descripcion varietal', dataTipoUva[1]),
    new Varietal(25, 'esta es la descripcion de varietal', dataTipoUva[2])
];
export const dataBodega = [
    new Bodega('Los olmos', 'una linda bodega', 'tiene muchos años', 3, new Date(2019, 5, 19), [4586351846]),
    new Bodega('Los platanos', 'la mejor de todas', 'ha ganado muchos premios', 3, new Date(2022, 5, 10), [54564985]),
    new Bodega('Los robles', 'una bodega humilde', 'estan recien arrancando', 3, new Date(2022, 7, 14), [498638752489])
];
export const dataSiguiendo = [
    new Siguiendo(new Date(2020, 9, 23), dataBodega[0], dataEnofilos[0]),
    new Siguiendo(new Date(2021, 2, 3), 'sommelier', dataEnofilos[0])
];
export const dataReseñas = [
    new Reseña('El mejor vino que probé en toda mi vida', true, new Date(), 5),
    new Reseña('El peor vino que probé en toda mi vida', false, new Date(), 1),
    new Reseña('Un vino más del monton, ni fu ni fa', true, new Date(), 3),
    new Reseña('epectacula', false, new Date(), 5)
];
export const dataMaridajes = [
    new Maridaje('albondigas con salsa', 'Que no combina con albondigas con salsa'),
    new Maridaje('higos', 'una mezcla atrevida pero seductora al ojo experto'),
    new Maridaje('fresas', 'una combinacion segura pèro deliciosa para aquellos que le gustan los clasicos')
];
export const dataVinoEnBD = [
    new Vino('Otro loco mas', dataBodega[0], 2005, new Date(), 'imagen', 'asd', 1000, [dataReseñas[0], dataReseñas[1]], [
        { uva: dataTipoUva[3], porcentaje: 80 },
        { uva: dataTipoUva[0], porcentaje: 20 }
    ], [dataMaridajes[1], dataMaridajes[2]]),
    new Vino('Otro loco mas2', dataBodega[1], 2006, new Date('2024-05-20'), 'imagen', 'asd', 1100, [dataReseñas[1], dataReseñas[2]], [{ uva: dataTipoUva[1], porcentaje: 80 }], [dataMaridajes[0], dataMaridajes[2]]),
    new Vino('Otro loco mas3', dataBodega[2], 2007, new Date('2024-05-19'), 'imagen', 'asd', 1000, [dataReseñas[2], dataReseñas[3]], [{ uva: dataTipoUva[2], porcentaje: 80 }], [dataMaridajes[1], dataMaridajes[2]]),
    new Vino('Otro loco mas4', dataBodega[0], 2008, new Date('2024-05-18'), 'imagen', 'asd', 1000, [dataReseñas[3], dataReseñas[0]], [{ uva: dataTipoUva[0], porcentaje: 80 }], [dataMaridajes[1], dataMaridajes[2]])
];
export const dataVinoRemoto = [
    new Vino('Otro loco mas2', dataBodega[1], 2006, new Date('2024-07-20'), 'imagenNueva', 'qwerty', 7200, [dataReseñas[1], dataReseñas[2]], [{ uva: dataTipoUva[1], porcentaje: 80 }], [dataMaridajes[0], dataMaridajes[2]]),
    new Vino('Cabernet Locura', dataBodega[1], 2010, new Date('2024-07-20'), 'imagenNueva', 'qwerty', 7200, [dataReseñas[1], dataReseñas[2]], [{ uva: dataTipoUva[1], porcentaje: 80 }], [dataMaridajes[0], dataMaridajes[2]]),
    new Vino('El hombre en moto', dataBodega[2], 2006, new Date('2024-07-20'), 'imagenNueva', 'qwerty', 7200, [dataReseñas[1], dataReseñas[2]], [{ uva: dataTipoUva[1], porcentaje: 80 }], [dataMaridajes[0], dataMaridajes[2]]),
    new Vino('Otro loco mas3', dataBodega[2], 2006, new Date('2024-07-20'), 'imagenNueva', 'qwerty', 7200, [dataReseñas[1], dataReseñas[2]], [{ uva: dataTipoUva[1], porcentaje: 80 }], [dataMaridajes[0], dataMaridajes[2]])
];
/*  fechaInicio : Date, bodega : Bodega, fechaFin ?: Date,  ) */
/*
for (let tipo of dataTipoUva){
    const nom = tipo.getNombre()
    console.log(nom)
    
    

}

dataTipoUva[1].setNombre("nuevoNombre")
const nom = dataTipoUva[1].getNombre()
console.log(nom)*/
