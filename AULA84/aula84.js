class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instâncias
    aumentarVolume() {
        return this.volume += 2;
    }
     diminuirVolume() {
        return this.volume -= 2;
    }


    // Metódo estático - não consegue acessar as instâncias, como o constructor
    static soma(x, y) {
        return x + y;
    }
}

const controle = new ControleRemoto('Sansung');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();

console.log(controle.aumentarVolume())

console.log(ControleRemoto.soma(4, 7));