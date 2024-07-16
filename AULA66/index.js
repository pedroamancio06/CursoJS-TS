//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro);

console.log('');

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade:  62},
    {nome: 'Maria', idade:  23},
    {nome: 'Eduardo', idade:  55},
    {nome: 'Letícia', idade:  19},
    {nome: 'Rosana', idade:  32},
    {nome: 'Wallace', idade:  47},
];

const pessoasMap1 = pessoas.map(objeto => objeto.nome);
console.log(pessoasMap1);


console.log('');


const pessoasMap2 = pessoas.map(obj => ({idade: obj.idade}));
console.log(pessoasMap2);


console.log('');


// const pessoasMap3 = pessoas.map((obj, indice) => {
//     obj.id = indice;
//     return obj;
// })
// console.log(pessoasMap3);


console.log('');


// Podemos criar também um novo array
const pessoasMap4 = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})
console.log(pessoasMap4);

// O array original não foi alterado
console.log(pessoas);