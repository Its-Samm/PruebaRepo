import { setTitle } from "./utils/functions.js";

setTitle("Estadistica de Ventas");
const ventas = [250,160,850,795,800];

const totalVendido = ventas.reduce((acumulador, valorActual) => {
    return acumulador +valorActual;
},0);
const ventaMasAlta = Math.max(...ventas);
const promedioVentas= totalVendido / ventas.length;

console.log (`Total vendido: ${totalVendido}`);
console.log(`Venta mas alta: ${ventaMasAlta}`);
console.log(`Promedio de ventas: ${promedioVentas}`);