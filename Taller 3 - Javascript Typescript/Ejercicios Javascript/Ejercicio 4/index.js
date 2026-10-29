import { setTitle } from "./utils/functions.js";

setTitle("Inventario de Estudiantes");
const estudiante = {
    nombre:"Samuel",
    edad:"19",
    carrera:"Ingenieria Sistemas",
    materias: [
        "Matematicas",
        "Programacion",
        "Fisica 2",
        "Base de Datos",
        "Ambiente Web I"
    ]
};

estudiante.edad="22";
estudiante.materias.push("Electiva Profecional I");

for (const entrada of Object.entries(estudiante)) {
    console.log(`${entrada[0]}: ${entrada[1]}`);
}