
type Producto = {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
};

let Producto1: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 3500,
    disponible: true,
};

let Producto2: Producto = {
    id: 2,
    nombre: "Mouse",
    precio: 100,
    disponible: false,
};

let Producto3: Producto = {
    id: 3,
    nombre: "Teclado",
    precio: 250,
    disponible: true,
};

console.log(Producto1);
console.log(Producto2);
console.log(Producto3);



export {};