module.exports = class Pessoa { // Nesse caso, como já estamos atribuindo é necessário usar o "module.exports" 
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    cria() {
        return `Olá ${this.nome}, você tem ${this.idade} e é ${this.profissao}`;
    };
}