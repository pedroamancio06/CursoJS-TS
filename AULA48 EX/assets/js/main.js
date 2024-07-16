function relogio() {
    const returnTimer = (segundos) => {
        let data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const tempo = document.querySelector('.tempo');
    let segundos = 0;
    let timer;
    
    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if (el.classList.contains('iniciar')) {
            tempo.classList.remove('pausado');
            clearInterval(timer); 
            timer = setInterval(function() {
                segundos++;
                tempo.innerHTML = returnTimer(segundos);
            }, 1000);
        }
    
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            tempo.classList.add('pausado');
        };
    
        if(el.classList.contains('zerar')) {
            clearInterval(timer);
            tempo.innerHTML = '00:00:00'
            segundos = 0;
            tempo.classList.remove('pausado');
        }
    });
}

relogio();
