function funcao({nome, idade, cidade}) {
    console.log(`Olá ${nome} você tem ${idade} e mora em ${cidade}`);
}
funcao({nome: 'Pedro', idade: 19, cidade: 'São Paulo'});

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 2, 20, 30, 40, 50);
