(function(peso1, altura1) {

    function exibirResultado(peso, altura) {
        const imc = peso / (altura * altura);
        console.log(`Seu IMC é ${imc.toFixed(1)}!`)
    }

    exibirResultado(peso1, altura1);

}) (77, 1.80);