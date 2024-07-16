function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));


function criaPessoa(nome) {
    return function(sobrenome) {
        return `Olá ${nome} ${sobrenome}`;
    }
}

const pessoa1 = criaPessoa('Pedro');
const pessoa2 = criaPessoa('Henrique');

console.log(pessoa1('Amancio'));
console.log(pessoa2('Lopes'));