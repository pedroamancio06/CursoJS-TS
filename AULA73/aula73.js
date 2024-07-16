//Métodos úteis para objetos

// Formas de copiar os dados de um objeto para outro
const produto = { nome: 'Produto', preco: 1.8 };
console.log(produto);

const caneca = { ...produto, material: 'plástico'}; //Spread Operator
caneca.nome = 'Caneca';
console.log(caneca);

const prato = Object.assign({}, produto, { material: 'porcelana'}); // Object.assign
prato.nome = 'Prato';
console.log(prato);

const copo = { nome: produto.nome, preco: produto.preco}; // Copiar somente o dado necessário
copo.nome = 'Copo';
console.log(copo);


console.log('')


//Congelar o objeto para que ele não possa ser alterado
const alimento = { nome: 'Pão', calorias: 70, proteina: 4};
Object.freeze(alimento); //'alimento' não pode ser alterado 
alimento.nome = 'Queijo'; // Não vai ser alterado por conta do Object.freeze()
console.log(alimento);


console.log('');


// Object.getOwnPropertyDescriptor(objeto, 'elemento') -> Retorna as propriedades do Object.defineProperty
const pessoas = { nome: 'Pedro', idade: 19 };
Object.defineProperty(pessoas, 'nome', {
    writable: false,
    configurable: false
})

pessoas.nome = 'João';
console.log(Object.getOwnPropertyDescriptor(pessoas, 'nome'));


console.log('');


// Object.values() -> retorna os valores
console.log(Object.values(pessoas));


console.log('');


//Object.entries() -> retorna em array, o elemento e seu valor
console.log(Object.entries(pessoas));

for (valor of Object.entries(pessoas)) {
    console.log(valor[0], valor[1]);
};