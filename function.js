var calculando;
var n;
var i = 0;
var v1 = 0;
var resultado;
function numero(n) {
    teste = document.getElementById('resultado').value;
    n = n;
    if (resultado != '0') {
        document.getElementById('resultado').value += n;
    } else {
        document.getElementById('resultado').value = n;
    }
}

function calcular(operadores) {
    switch (operadores) {
        case 1:
            operador = ' + ';
            break;
        case 2:
            operador = ' - ';
            break;
        case 3:
            operador = ' * ';
            break;
        case 4:
            operador = ' ÷ ';
            break;
        default:
            break;
    }
    v1 = 0;
    i = i + 1;
    if (i == 2) {
        calculo();
        i = 1;
    };


    document.getElementById('resultado').value += operador;

}

function calculo() {
    calculando = document.getElementById('resultado').value;
    soma = calculando.split(' ');
    switch (soma[1]) {
        case '+':
            resultado = parseFloat(soma[0]) + parseFloat(soma[2])
            break;
        case '-':
            resultado = parseFloat(soma[0]) - parseFloat(soma[2])
            break;
        case '*':
            resultado = parseFloat(soma[0]) * parseFloat(soma[2])
            break;
        case '÷':
            resultado = parseFloat(soma[0]) / parseFloat(soma[2])
            break;
        default:
            break;
    }

    if (calculando == 0) {
        document.getElementById('resultado').value = 0;
    } else {
        document.getElementById('resultado').value = resultado;
    }


}

function especial(esp) {
    switch (esp) {
        case 1:
            document.getElementById('resultado').value = 0;
            i = 0;
            v1 = 0
            break;
        case 2:
            if (v1 == 0) {
                numero('.');
                v1 = v1 + 1;
            } else {

            }

            break;

        default:
            break;
    }
}
