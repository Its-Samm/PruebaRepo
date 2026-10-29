import { setTitle } from "./utils/functions.js";

setTitle("Tabla de multiplicar");
function tablaMultiplicar(num, cant) {
    for (let i = 1; i <= cant; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

tablaMultiplicar(2, 15);
