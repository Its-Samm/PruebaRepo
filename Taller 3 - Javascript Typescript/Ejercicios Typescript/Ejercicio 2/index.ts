
let numeros: number[] = [10,20,30];
let frutas: string[] = ["Manzana","Pera","Banano",];
let estados: boolean[] = [true, false,true];

console.log(numeros);
console.log(frutas);
console.log(estados);

numeros.push(40);
frutas.push("Mango");
estados.push(false);

console.log(numeros);
console.log(estados);
console.log(frutas);

numeros.pop();
frutas.pop();
estados.pop();

console.log(numeros);
console.log(frutas);
console.log(estados);

for (const numero of numeros) {
    console.log(numero);
}

for (const estado of estados) {
    console.log(estado);
}

for (const fruta of frutas) {
    console.log(fruta);
}



export {};