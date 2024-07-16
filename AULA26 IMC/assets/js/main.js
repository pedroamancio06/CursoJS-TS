const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    } else if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivel = nivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivel}).`;

    setResultado(msg, true);
})


function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(1);
}

function nivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 
    'Obesidade grau 3']

    if (imc > 39.9) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}
    
function criaP() {
    const paragrafoResultado = document.createElement('p');
    return paragrafoResultado;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const paragrafoResultado = criaP();

    if (isValid) { 
        paragrafoResultado.classList.add('paragrafoResultado');
    } else {
        paragrafoResultado.classList.add('bad');
    }
    paragrafoResultado.innerHTML = msg;
    resultado.appendChild(paragrafoResultado);
}