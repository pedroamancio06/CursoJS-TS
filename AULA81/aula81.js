// Classes
const idade = 19;
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade; // É possível acessar elementos fora da Classe
    };

    criar() {
        console.log(this.nome, this.sobrenome, this.idade);
    }
}

const p1 = new Pessoa('Pedro', 'Amancio')
p1.criar();