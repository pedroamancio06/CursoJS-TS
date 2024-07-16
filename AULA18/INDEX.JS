// function dado(nome, idade, altura) {
//     return {nome, idade, altura}
// }

// const pessoa = dado('Pedro', 18, 1.81)

// console.log(pessoa.idade, pessoa.altura, pessoa.nome);

const pessoal = {
    idade: 19,
    altura: 1.81,
    peso: 77,

    imc(peso, altura) {
        console.log(peso / (altura*altura));
    }
}

pessoal.imc(77, 1.80);