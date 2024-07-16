class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    };

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já está ligado`);
            return;
        };
        this.ligado = true;
    };

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já está desligado`);
            return;
        };
        this.ligado = false;
    };
}

class Smartphone extends DispositivoEletronico {};

const celular = new DispositivoEletronico('Celular');
celular.desligar();
console.log(celular);   
