writeToConsole("Hola Mundo desde programacion.js");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const arrayResultados = [];

function mostrarMensaje() {
}

function sumar() {  
    const resultado = returnSuma(num1.value, num2.value);
    document.getElementById("resultadoValor").innerHTML = resultado;
    if (resultado > 100) {
        document.getElementById("resultadoValor").style.color = "red";
        document.getElementById("resultadoValor").style.fontWeight = "bold";
    } else if (resultado < 0) {
        document.getElementById("resultadoValor").style.color = "blue";
        document.getElementById("resultadoValor").style.fontWeight = "bold";
    } else {
        document.getElementById("resultadoValor").style.color = "black";
        document.getElementById("resultadoValor").style.fontWeight = "normal";
    }
    console.log(arrayResultados);
    resultInHTML = "";
    for (let i = 0; i < arrayResultados.length; i++) {
       resultInHTML = resultInHTML + "Resultado: " + arrayResultados[i] + "<br>";
    }
    document.getElementById("historialResultados").innerHTML = resultInHTML;
    arrayResultados.push(resultado);
}

function writeToConsole(message) {
    console.log(message);
}

function returnSuma(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
}

function myAlert(message) {
    window.alert(message);
}

function mostrarLoop() {
    const arraytest = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99];
    resultInHTML = "";
    for (let i = 0; i < arraytest.length; i++) {
        writeToConsole("Número de loop: " + i + " - Valor en el array: " + arraytest[i]);
        resultInHTML = resultInHTML + "Número de loop: " + i + " - Valor en el array: " + arraytest[i] + "<br>";
    }
    document.getElementById("loopResult").innerHTML = resultInHTML;
}
