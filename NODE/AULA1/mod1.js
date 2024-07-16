const nome = 'Pedro';
const sobrenome = 'Amancio';

const falaNome = () => `${nome} ${sobrenome}`;

// a chave não precisa necessariamente ter o mesmo nome que o valor, por exemplo: 
module.exports.nome = nome;
module.exports.segundoNome = sobrenome;

// ou pode  usar o atalho: "exports."
exports.falaNome = falaNome;

// o "this" também pode ser usado nesse caso, porém não é muito usado
this.qualquerCoisa = 'O que eu quiser exportar';

console.log(module.exports);


// Podemos exportar classe também: 
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
} 

exports.Pessoa = Pessoa;