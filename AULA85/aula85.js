class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    get novoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);

        return cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        const cpfArray = Array.from(cpfSemDigitos);

        if (cpfArray.length === 9) {
            const cpf = cpfArray.map((valor, indice) => valor * (10 - indice))
            .reduce((acm, valor) => acm + valor, 0);
            const digito = (11 - (cpf % 11));
            return digito <= 9 ? String(digito) : '0';
        };

        if (cpfArray.length === 10) {
            const cpf = cpfArray.map((valor, indice) => valor * (11 - indice))
            .reduce((acm, valor) => acm + valor, 0);
            const digito = (11 - (cpf % 11));
            return digito <= 9 ? String(digito) : '0';
        };
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        
        return this.novoCpf === this.cpfLimpo;
    }

}

const validaCpf = new ValidaCpf('125.389.248-20');

if (validaCpf.valida()) {
    console.log('Cpf válido');
} else {
    console.log('Cpf inváido');
};