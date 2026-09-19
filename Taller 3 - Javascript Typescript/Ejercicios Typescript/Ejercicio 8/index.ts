
class Persona{
    constructor(
        public nombre: string,
        public edad: number,
    ) {}
}

class Estudiante extends Persona{
    constructor(
        nombre: string,
        edad: number,
        public carrera: string,
    ){
        super(nombre, edad);
    }
    
}

const estudiante = new Estudiante(
    "Samuel",
    22,
    "Igenieria Sistemas"
);

console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante.edad);
console.log(estudiante.carrera);

