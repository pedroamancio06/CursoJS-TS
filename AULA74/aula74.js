// Prototype

// Função Construtora -> modelo
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`; 
};

// Usando o Prototype
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

const pessoa1 = new Pessoa('Pedro Henrique', 'Amancio Lopes');
console.dir(pessoa1.nomeCompleto());
console.log(pessoa1.nomeCompleto());