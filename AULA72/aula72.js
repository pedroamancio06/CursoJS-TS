function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        
        get: function() {
            return estoque;
        },

        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Estoque deve ser um número');
            }
            estoque = valor;
        }
    })
}

const produto1 = new Produto('Camisa', 29.90, 10);
produto1.estoque = 13;
console.log(produto1.estoque);


function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }
    }
}

const produto2 = criaProduto('Calça');

console.log(produto2.nome);