function Gerenciamento(nome, preco, estoque) {
    
    this.nome = nome,
    this.preco = preco,
    this.estoque = estoque,

    Object.defineProperty(this, 'preco', {
        enumerable: true, // mostra a chave 
        value: preco, // define o valor
        writable: true, // define se o valor do elemento pode ser alterado
        configurable: false // define se é configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        }
    })
}

const g1 = new Gerenciamento('Calça', 49.99, 10);
g1.preco = 55;
console.log(g1);