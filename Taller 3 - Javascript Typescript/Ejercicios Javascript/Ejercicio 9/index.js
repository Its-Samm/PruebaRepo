import { setTitle } from "./utils/functions.js";

setTitle("Desestructuracion");
const computador = {
    marca: "Lenovo",
    procesador: "Intel i7",
    ram: 16,
    almacenamiento: 512
};

const { marca, ram, almacenamiento: ssd, targetaGrafica = "Integrada"} = computador;
console.log(marca);
console.log(ram);
console.log(ssd);
console.log(targetaGrafica);
