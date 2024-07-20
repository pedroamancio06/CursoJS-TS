// Nodemon

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action='' method="POST">
            Nome: 
            <input type="text" name="nome">
            <button>Enviar Formulário</button>
        </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Formulário recebido!');
});

app.listen(8080, () => {
    console.log('Acessar http://localhost:8080');
    console.log('Servidor executando na porta 8080!');
});