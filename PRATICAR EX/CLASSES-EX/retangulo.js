class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    get area() {
        if (typeof this.largura !== 'number' || typeof this.altura !== 'number' ) {
            return undefined;
        }
        return this.largura * this.altura;
    }

    get perimetro() {
        if (typeof this.largura !== 'number' || typeof this.altura !== 'number' ) {
            return undefined;
        }
        return 2 * (this.largura + this.altura);
    }
}

const retangulo = new Retangulo(10, 2);
console.log(retangulo.area);