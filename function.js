var calculando;
var n;
var i = 0;
function numero(n) {
    teste = document.getElementById('resultado').value;
    console.log("teste:" + teste);
    n = n;
    if (teste != '0') {
        document.getElementById('resultado').value += n;
        console.log('dentro!');
    } else {
        document.getElementById('resultado').value = n;
        console.log('fora!');
    }
}

function calcular(opearadores) {
    switch (opearadores) {
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

    i = i + 1;
    if (i == 2) {
        calculo();
        i = 1;
    };
    console.log('i' + i);

    document.getElementById('resultado').value += operador;
    console.log(operador)
}

function calculo() {
    calculando = document.getElementById('resultado').value;
    soma = calculando.split(' ');
    console.log(soma);
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
        ocument.getElementById('resultado').value = 0;
    } else {
        document.getElementById('resultado').value = resultado;
        console.log(resultado);
    }


}

function especial(esp) {
    switch (esp) {
        case 1:
            document.getElementById('resultado').value = 0;
            i = 0;
            break;
        case 2:
            numero('.')
            console.log(2.5 + 2.5)
            break;

        default:
            break;
    }
}