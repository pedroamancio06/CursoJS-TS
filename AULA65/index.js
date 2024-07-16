const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Filtrae os números maiores que 10
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

console.log('');


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

const pessoasFilter1 = pessoas.filter(objeto => objeto.nome.length >= 5);
console.log(pessoasFilter1);

console.log('');

const pessoasFilter2 = pessoas.filter(objeto => objeto.idade > 50);
console.log(pessoasFilter2);

console.log('');

const pessoasFilter3 = pessoas.filter(objeto => objeto.nome.endsWith('a'));  //Verifica a ultima letra da String
console.log(pessoasFilter3);
