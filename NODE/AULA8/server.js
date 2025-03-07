
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form action='' method="POST">
            Nome: 
            <input type="text" name="nome">
            <button>Enviar Formulário</button>
        </form>
    `)
})

// * req.params -> parâmetros de url, exemplo: http://www.facebook.com/profiles/id - "profiles" e "id" são parâmetros de url

// * req.query -> chaves e valores na url, exemplor: /profiles/id/nome=pedro&sobrenome=amancio

app.get('/test/:idProfiles?/:params?', (req, res) => { /* Note que deve ser colocados ":" antes do param e "?" para que a rota "test" funcione também*/
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi valor: ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar em http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});