import { setTitle } from "./utils/functions.js";


setTitle("Catalogo libros");
const libros = [
    {
        id: 1,
        titulo: "JavaScript",
        disponible: true
    },
    {
        id: 2,
        titulo: "Python",
        disponible: false
    },
    {
        id: 3,
        titulo: "Java",
        disponible: true
    },
];

const libroDos = libros.find(libro => libro.id === 2);
const librosDisponibles = libros.filter(libro => libro.disponible);
const titulos = libros.map(libro => libro.titulo);

console.log (libroDos);
console.log(librosDisponibles);
console.log(titulos);