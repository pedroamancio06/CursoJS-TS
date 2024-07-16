// Configurar e manipula o objeto -> .setPrototypeOf(objA, objB)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Ciar método fora da function
Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100));
};

const camisa = new Produto('Camisa', 55);
camisa.desconto(20);

const meia = {
    nome: 'Meia',
    preco: 15
}

Object.setPrototypeOf(meia, Produto.prototype)

console.log(camisa);
console.log(meia);

const tenis = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    }, 
    
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 41
    }
});

tenis.desconto(10);
console.log(tenis);
