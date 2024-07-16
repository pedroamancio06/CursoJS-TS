// Validando um CPF

function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCpf.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'unbdefined') return false;
    if (typeof this.cpfLimpo.length !== 11) return false;
   
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    console.log(cpfParcial);
    const digito1 = this.criaDigito(cpfParcial);

    return true;
}

ValidaCpf.prototype.criaDigito = function() {
    cpfArray = Array.from(cpfParcial);
    console.log(cpfArray)
}

const cpf = new ValidaCpf('705.484.450-52');
cpf.criaDigito();