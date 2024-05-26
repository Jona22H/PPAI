"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataVinoRemoto = exports.dataVinoEnBD = exports.dataMaridajes = exports.dataReseñas = exports.dataSiguiendo = exports.dataBodega = exports.dataVarietal = exports.dataTipoUva = exports.dataEnofilos = exports.dataUsuarios = void 0;
const siguiendo_1 = __importDefault(require("../siguiendo"));
const tipoDeUva_1 = __importDefault(require("../tipoDeUva"));
const varietal_1 = __importDefault(require("../varietal"));
const bodega_1 = __importDefault(require("../bodega"));
const rese_a_1 = __importDefault(require("../rese\u00F1a"));
const enofilo_1 = __importDefault(require("../enofilo"));
const usuario_1 = __importDefault(require("../usuario"));
const maridaje_1 = __importDefault(require("../maridaje"));
const vino_1 = __importDefault(require("../vino"));
exports.dataUsuarios = [
    new usuario_1.default("1111", "Gonzalo", true, "-"),
    new usuario_1.default("2222", "Alan", true, "-"),
];
exports.dataEnofilos = [
    new enofilo_1.default("zavala", "-", "Gonzalo", exports.dataUsuarios[0]),
    new enofilo_1.default("moyano", "https://http.cat/400.jpg", "Alan", exports.dataUsuarios[1]),
];
exports.dataTipoUva = [
    new tipoDeUva_1.default("Chardonnay", "Versátil y reconocida. Vinos blancos secos y cremosos con notas de frutas cítricas y manzanas"),
    new tipoDeUva_1.default("Moscatel", "Intenso y aromático. Vinos blancos dulces con sabores a uva, albaricoque y miel."),
    new tipoDeUva_1.default("Merlot", "Suave y accesible. Uva tinta versátil que ofrece vinos con sabores a ciruelas, cerezas negras y taninos suaves."),
    new tipoDeUva_1.default("Malbec", "acidez equilibrada y taninos suaves"),
];
exports.dataVarietal = [
    new varietal_1.default(15, "descripcion de este varietal", exports.dataTipoUva[0]),
    new varietal_1.default(18, "otra descripcion varietal", exports.dataTipoUva[1]),
    new varietal_1.default(25, "esta es la descripcion de varietal", exports.dataTipoUva[2]),
];
exports.dataBodega = [
    new bodega_1.default("Los olmos", "una linda bodega", "tiene muchos años", 3, new Date(2019, 5, 19), [4586351846]),
    new bodega_1.default("Los platanos", "la mejor de todas", "ha ganado muchos premios", 3, new Date(2024, 5, 10), [54564985]),
    new bodega_1.default("Los robles", "una bodega humilde", "estan recien arrancando", 3, new Date(2022, 7, 14), [498638752489]),
];
exports.dataSiguiendo = [
    new siguiendo_1.default(new Date(2020, 9, 23), exports.dataBodega[0], exports.dataEnofilos[0]),
    new siguiendo_1.default(new Date(2021, 2, 3), "sommelier", exports.dataEnofilos[0]),
];
exports.dataReseñas = [
    new rese_a_1.default("El mejor vino que probé en toda mi vida", true, new Date(), 5),
    new rese_a_1.default("El peor vino que probé en toda mi vida", false, new Date(), 1),
    new rese_a_1.default("Un vino más del monton, ni fu ni fa", true, new Date(), 3),
    new rese_a_1.default("epectacula", false, new Date(), 5),
];
exports.dataMaridajes = [
    new maridaje_1.default("albondigas con salsa", "Que no combina con albondigas con salsa"),
    new maridaje_1.default("higos", "una mezcla atrevida pero seductora al ojo experto"),
    new maridaje_1.default("fresas", "una combinacion segura pèro deliciosa para aquellos que le gustan los clasicos"),
];
exports.dataVinoEnBD = [
    new vino_1.default("Otro loco mas", exports.dataBodega[0], 2005, new Date(), "imagen", "asd", 1000, [exports.dataReseñas[0], exports.dataReseñas[1]], [
        { uva: exports.dataTipoUva[3], porcentaje: 80 },
        { uva: exports.dataTipoUva[0], porcentaje: 20 },
    ], [exports.dataMaridajes[1], exports.dataMaridajes[2]]),
    new vino_1.default("Otro loco mas2", exports.dataBodega[1], 2006, new Date("2024-05-20"), "imagen", "asd", 1100, [exports.dataReseñas[1], exports.dataReseñas[2]], [{ uva: exports.dataTipoUva[1], porcentaje: 80 }], [exports.dataMaridajes[0], exports.dataMaridajes[2]]),
    new vino_1.default("Otro loco mas3", exports.dataBodega[2], 2007, new Date("2024-05-19"), "imagen", "asd", 1000, [exports.dataReseñas[2], exports.dataReseñas[3]], [{ uva: exports.dataTipoUva[2], porcentaje: 80 }], [exports.dataMaridajes[1], exports.dataMaridajes[2]]),
    new vino_1.default("Otro loco mas4", exports.dataBodega[0], 2008, new Date("2024-05-18"), "imagen", "asd", 1000, [exports.dataReseñas[3], exports.dataReseñas[0]], [{ uva: exports.dataTipoUva[0], porcentaje: 80 }], [exports.dataMaridajes[1], exports.dataMaridajes[2]]),
];
exports.dataVinoRemoto = [
    new vino_1.default("Otro loco mas2", exports.dataBodega[1], 2006, new Date("2024-07-20"), "imagenNueva", "qwerty", 7200, [exports.dataReseñas[1], exports.dataReseñas[2]], [{ uva: exports.dataTipoUva[1], porcentaje: 80 }], [exports.dataMaridajes[0], exports.dataMaridajes[2]]),
    new vino_1.default("Cabernet Locura", exports.dataBodega[1], 2010, new Date("2024-07-20"), "imagenNueva", "qwerty", 7200, [exports.dataReseñas[1], exports.dataReseñas[2]], [{ uva: exports.dataTipoUva[1], porcentaje: 80 }], [exports.dataMaridajes[0], exports.dataMaridajes[2]]),
    new vino_1.default("El hombre en moto", exports.dataBodega[2], 2006, new Date("2024-07-20"), "imagenNueva", "qwerty", 7200, [exports.dataReseñas[1], exports.dataReseñas[2]], [{ uva: exports.dataTipoUva[1], porcentaje: 80 }], [exports.dataMaridajes[0], exports.dataMaridajes[2]]),
    new vino_1.default("Otro loco mas3", exports.dataBodega[2], 2006, new Date("2024-07-20"), "imagenNueva", "qwerty", 7200, [exports.dataReseñas[1], exports.dataReseñas[2]], [{ uva: exports.dataTipoUva[1], porcentaje: 80 }], [exports.dataMaridajes[0], exports.dataMaridajes[2]]),
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
