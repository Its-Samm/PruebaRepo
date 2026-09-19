import { setTitle } from "./utils/functions.js";

setTitle("Calculadora basica");
function calculadora (num1, num2,operador) {
    switch (operador) {
        case "+":
        return num1 + num2;
        case "-":
        return num1 - num2;
        case "*":
        return num1 * num2;
        case "/":
        if (num2 === 0) {
            return "No se puede dividir por 0";
        }
        return num1 / num2;
        default:
            return "operador no valido";
    }
}
console.log (calculadora(2, 8, "+"));
console.log (calculadora(2, 8, "-"));
console.log (calculadora(2, 8, "*"));
console.log (calculadora(2, 8, "/"));
console.log (calculadora(2, 8, "/"));