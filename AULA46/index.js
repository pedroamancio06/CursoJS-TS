const returnHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(function() {
    console.log(returnHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 5100);

setTimeout(function() {
    console.log('Parabéns');
}, 6100);
