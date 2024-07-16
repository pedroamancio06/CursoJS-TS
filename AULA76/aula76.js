// Herança -> características de um objeto são passadas para outro objeto

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(quantia) {this.preco -= quantia};
Produto.prototype.aumento = function(quantia) {this.preco += quantia};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}

Camiseta.prototype = Object.create(Produto.prototype); // Anexar o prototype de 'Caneca' com  'Produto', ou seja estamos dizendo que 'Caneca' tem com protótipo 'Produto
Camiseta.prototype.constructor = Camiseta; //  Linkar o construtor da função ao seu próprio construtor

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },

        set: function(valor) {
            if (typeof valor !== 'numbre') return;
            estoque = valor;
        } 
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};


const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5);
const caneca = new Caneca('Caneca', 7.5, 'Porcelana', 7);