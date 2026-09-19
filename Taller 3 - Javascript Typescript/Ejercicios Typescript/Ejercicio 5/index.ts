
function mostrarDato(valor: string | number): void {

    if (typeof valor === "string") {
        console.log (valor.toUpperCase());
    }

    if (typeof valor === "number") {
        console.log (valor.toFixed(2));
    }

}

mostrarDato("mil-quinientos");
mostrarDato("1500");


export {};