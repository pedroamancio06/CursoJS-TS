// Filter -> .filter(valor, indice, array);

const numeros = [1, 2, 3, 5, 8, 7];
const dobro = numeros.map((valor, ind) => valor * (10 - ind));
console.log(dobro.reduce((acm, valor) => acm));





// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos 
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Will', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const retornaNome = pessoas.map(valor => valor.nome);
console.log(retornaNome);

const objIdade = pessoas.map(obj => ({idade: obj.idade}));
console.log(objIdade);

const addId = pessoas.map((obj, indice) => {
    obj.id = indice;
    return obj;
});
console.log(addId);

// const nomeCinco = pessoas.filter(valor => valor.nome.length >=5);
// console.log(nomeCinco);

// const mais50 = pessoas.filter(valor => valor.idade > 50);
// console.log(mais50);

// const terminaA = pessoas.filter(valor => valor.nome.endsWith('a'));
// console.log(terminaA);

