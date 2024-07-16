const horaR = () => {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR');
}

const timer = setInterval(function() {
    console.log(horaR());
}, 1000)

setTimeout(function() {
    clearInterval(timer);
})