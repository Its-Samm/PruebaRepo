
function obtenerPrimero<T>(elementos: T[]): T {
    return elementos[0];
}

console.log(obtenerPrimero([10,20,30]));
console.log (obtenerPrimero(["Rojo", "Azul", "Verde", "Negro"]));
console.log(obtenerPrimero([true, false, true]));


export {};