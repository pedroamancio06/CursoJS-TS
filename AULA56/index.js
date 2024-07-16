function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        //Atributos
        nome,
        sobrenome,
        peso : peso,
        altura : altura,
        
        //Métodos
        get nomeCompleto() {
            //Pode usar o 'this' ou direto o parâmetro
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto) {
            return `${this.nome} está falando sobre ${assunto}`;
        },

        //Pode usar o 'get' para o método virar atributo ou deixar como método mesmo
        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Pedro', 'Amancio', 90, 1.8);
console.log(p1.fala('JS.'));
console.log(p1.imc);
p1.nomeCompleto = 'João Silva';
console.log(p1.nomeCompleto)