const path = require('path');
const caminho = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

const pessoas = [
    {   nome: 'João',
        id: 1,
    },
    {   nome: 'José',
        id: 2,
    },
    {   nome: 'Maria',
        id: 3,
    },
];

const json = JSON.stringify(pessoas, '', 2);
escrever(caminho, json);

async function recebe() {
    const dados = await ler(caminho);
    render(dados);
}

function render(dados) {
    dados = JSON.parse(dados);
    dados.forEach(valor => {
        console.log(` Seu nome: ${valor.nome}`);
    }); 
}

recebe();