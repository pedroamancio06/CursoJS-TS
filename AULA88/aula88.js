// Métodos úteis para PROMISES

function rand(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise ((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(new Error('Deve ser string'));
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ': Passei na promise');
        }, tempo)
    });
}

// Promise.all -> 
// Promise.race -> 
// Promise. -> 
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', rand(1, 3)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 2)),
    // esperaAi(123, rand(1, 2)),
    'Outro valor',
];

Promise.all(promises)
    .then((valor) => {
        console.log(valor);    
    })
    .catch((erro) => {
        console.log(erro);
    });
    

const promises2 = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promises2)
    .then((valor) => {
        console.log(valor);
    }) 
    .catch((erro) => {
        console.log(erro);
    });