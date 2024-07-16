// Factory Function + Prototype
const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}; 

const pessoaPrototype = /* Object.assign({})*/ {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
    
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

function criaPessoa(nome, idade) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome}, 
        idade: {value: idade}
    });
}

const p1 = criaPessoa('Pedro', 19);
p1.falar();