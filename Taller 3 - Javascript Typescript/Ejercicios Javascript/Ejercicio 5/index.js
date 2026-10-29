import { setTitle } from "./utils/functions.js";

setTitle("Filtrar Empleaados");
const empleados = [
    {nombre:"Juan", salario: 2500},
    {nombre:"Camila", salario: 9000},
    {nombre:"Andres", salario: 1500},
    {nombre:"Ximena", salario: 11520},
    {nombre:"Danna", salario: 7400},
    {nombre:"Samuel", salario: 800},
];

const empleadosFiltrados= empleados.filter(empleado => empleado.salario >= 6000);
console.log(empleadosFiltrados);