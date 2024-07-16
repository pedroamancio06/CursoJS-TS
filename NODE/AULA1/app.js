// importar o módulo completo: 
const mod1 = require('./mod1');
console.log(mod1.falaNome());


// importando somente a função "falaNome":
const falaNome = require('./mod1').falaNome;
console.log(falaNome()); // ou:

const falaNome2 = mod1.falaNome;
console.log(falaNome2());


// Podemos também usar a atribuição via desestruturação:
const { nome, segundoNome, falaNome } = require('./mod1');
console.log(nome, segundoNome, falaNome());


// Importando uma classe:
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Pedro');
console.log(p1.nome);
