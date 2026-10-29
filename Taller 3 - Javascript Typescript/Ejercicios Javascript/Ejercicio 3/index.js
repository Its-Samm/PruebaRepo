import { setTitle } from "./utils/functions.js";

setTitle("Gestion de Producto");
const productos = ["Laptop", "Mouse", "Teclado"];

productos.push ("Monitor");
productos.unshift ("Audifonos");
productos.pop();

console.log(productos);