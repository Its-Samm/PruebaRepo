
interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

let empleado1 : Empleado = {
    nombre: "Ana",
    cargo: "Desarrolladora",
    salario: 4500
};

let empleado2 : Empleado = {
    nombre: "Samuel",
    cargo: "Diseñador",
    salario: 3800
};

let empleado3 : Empleado = {
    nombre: "Felipe",
    cargo: "Analista Base de Datos",
    salario: 11000
};

console.log(empleado1);
console.log(empleado2);
console.log(empleado3);


export {};