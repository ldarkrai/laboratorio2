let num1;
let num2;
let operacion;

function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir entre cero.";
        }
        return num1 / num2;
    } else {
        return "Operación no válida.";
    }
}

while (true) {
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    operacion = prompt('Ingrese la operación a realizar ("suma", "resta", "multiplicacion", "division" o "salir" para finalizar):').toLowerCase();

    if (operacion === "salir") {
        console.log("Gracias por usar la calculadora. ¡Hasta pronto!");
        break;
    }

    // Validar si la operación es válida
    let resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la operación ${operacion} entre ${num1} y ${num2} es: ${resultado}`);
}
