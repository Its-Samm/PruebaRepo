import { setTitle } from "./utils/functions.js";

setTitle("Copia y Referencias");
const usuario = {
    nombre : "Carlos",
    edad: "30"
};

const copiaAsignacion = usuario;
copiaAsignacion.nombre ="Pedro";
console.log (usuario.nombre);
console.log(copiaAsignacion.nombre);

usuario.nombre = "Carlos";

const copiaSpread = {
    ...usuario
};
copiaSpread.nombre = "Laura";
console.log(usuario.nombre);
console.log(copiaSpread.nombre);
