function soma() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = "Resultado: " + result;
}

function subtracao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "Resultado: " + result;
}

function multiplicacao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "Resultado: " + result;
}

function divisao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        var result = num1 / num2;
        document.getElementById("result").innerHTML = "Resultado: " + result;
    } else {
        document.getElementById("result").innerHTML = "Divisão por zero não é permitida.";
    }
}

function quadrado() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var result = num1 * num1;
    document.getElementById("result").innerHTML = "Resultado: " + result;
}

function raizQuadrada() {
    var num1 = parseFloat(document.getElementById("num1").value);
    if (num1 >= 0) {
        var result = Math.sqrt(num1);
        document.getElementById("result").innerHTML = "Resultado: " + result;
    } else {
        document.getElementById("result").innerHTML = "Número negativo, raiz quadrada não é definida.";
    }
}

function raizCubica() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var result = Math.cbrt(num1);
    document.getElementById("result").innerHTML = "Resultado: " + result;
}

function verificarPrimo() {
    var num1 = parseInt(document.getElementById("num1").value);
    if (num1 <= 1) {
        document.getElementById("result").innerHTML = "Número deve ser maior que 1.";
        return;
    }
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        document.getElementById("result").innerHTML = num1 + " é primo.";
    } else {
        document.getElementById("result").innerHTML = num1 + " não é primo.";
    }

}
