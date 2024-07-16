class BankAccount {
    constructor(accountNumber, holderName, balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    get valid() {
        if (this.accountNumber.length !== 10 || typeof this.holderName !== 'string') {
            return false;
        };
        return true;
    }
    
    deposit(value) {
        if (!this.valid) return 'Conta inválida'; // this.valid != true
        return this.balance += value;
    }

    withraw(value) {
        if (!this.valid) return 'Conta inválida';
        if (this.balance < value) return 'Saldo insuficiente!';
        return this.balance -= value;
    }
    
    transfer(value, transferAccount) {
        if (!this.valid) return 'Conta inválida';
        if (this.balance >= value) {
            return `R$${value} transferido para ${transferAccount}!`
        };
        return 'Saldo insuficiente!';
    }
}

const account1 = new BankAccount('1234567890', 'Pedro Amancio', 1000);
console.log(account1.withraw(300));
console.log(account1.transfer(400, 'João'));