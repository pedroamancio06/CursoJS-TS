// Revisando Objetos

// Acessando o objeto - 2 formas 
const pessoa = {
    nome: 'Pedro', 
    sobrenome: 'Amancio'
};
console.log(pessoa.nome);
console.log(pessoa['nome']);


console.log('')


// Construindo o objeto - 2 formas
const pessoa1 = new Object();
pessoa1.nome = 'João';

const pessoa2 = {
    nome: 'João'
};
console.log(pessoa1, pessoa2);


console.log('')


// Deletando um elemento do objeto 
delete pessoa.nome;
console.log(pessoa);


console.log('')


// Função dentro do objeto que tem acesso aos seus elementos
const pessoa3 = new Object();
pessoa3.nome = 'Maria';
pessoa3.idade = 45;

pessoa3.falarNome = function() {
    console.log(`${this.nome} está falando`);
};
pessoa3.falarNome();

pessoa3.anoDeNascimento = function() {
    const data = new Date();
    return data.getFullYear() - this.idade;
};
console.log(pessoa3.anoDeNascimento());


console.log('')

//Factory functions / Constructor functions / Classes
function criaPessoas(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
    }
}

const p1 = criaPessoas('Pedro', 'Amancio');
console.log(p1.nomeCompleto);


function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('João', 'Silva');
p2.nome = 'Outro nome'; // É possível alterar o valor do atributo 

Object.freeze(p2.sobrenome); // O 'freeze' não permite mudança no valor
p1.sobrenome = 'Novo sobrenome';
console.log(p2);