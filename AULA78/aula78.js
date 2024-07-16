function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`);
        return;
    };
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function() {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo}`);
};

const conta1 = new Conta(11, 22, 40);
conta1.sacar(20);
conta1.depositar(50);
conta1.verSaldo();

console.log();

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

const contaCorrente1 = new ContaCorrente(11, 33, 100, 100);
contaCorrente1.sacar(110);
contaCorrente1.sacar(110);

console.log();

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

const contaPoupanca1 = new ContaPoupanca(11, 22, 100);
contaPoupanca1.depositar(12);
contaPoupanca1.sacar(120);