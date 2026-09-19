import { setTitle } from "./utils/functions.js";

setTitle("Sistema de Gestion de Estudiantes");
const estudiantes =[
    {
    id: 1,
    nombre: "Ana",
    nota: 4.5,
    edad: 20
    },
    {
    id: 2,
    nombre: "Luis",
    nota: 3.8,
    edad: 16
    },
    {
    id: 3,
    nombre: "Carlos",
    nota: 4.9,
    edad: 22
    },
    {
    id: 4,
    nombre: "Laura",
    nota: 2.9,
    edad: 17
    }
];

const aprobados = estudiantes.filter(alumno => alumno.nota >= 3.0);
console.log("Aprobados:");
console.log(aprobados);

const mayorDeEdad = estudiantes.filter(alumno => alumno.edad >= 18);
console.log("Mayores de Edad:");
console.log(mayorDeEdad);

const nombreEstudiantes = estudiantes.map(alumno => alumno.nombre);
console.log("Nombres:");
console.log(nombreEstudiantes);

const estudianteTres = estudiantes.find(alumno => alumno.id === 3);
console.log("Estudiante con id 3:");
console.log(estudianteTres);

const sumaNotas = estudiantes.reduce((acumulador, alumno) =>{
    return acumulador + alumno.nota;
},0 );
const promedioNotas = sumaNotas / estudiantes.length; 
console.log(`Promedio de notas: ${promedioNotas}`);

const notas = estudiantes.map(alumno => alumno.nota);
const notaMasAlta = Math.max(...notas);

const mejorEstudiante = estudiantes.find(alumno => alumno.nota === notaMasAlta);
console.log("Estudiante con la nota mas alta:");
console.log(mejorEstudiante);

const estudiantesConEstado = estudiantes.map(alumno => {
    return {
        ...alumno,
        estado: alumno.nota >= 3.0 ? "Aprobo" : "Reprobo"
    };
});
console.log("Estudiantes con estado:");
console.log(estudiantesConEstado);

const copiaEstudiantes = [...estudiantes];
console.log("Copia del Arreglo:");
console.log(copiaEstudiantes);
