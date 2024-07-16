const nomes = ['Pedro', 'João'];
const numeros = [1, 2, 3];

// Exemplo 1
const a3 = numeros.concat([5, 6, 7], nomes, 'Maria');
console.log(a3);

console.log('');

//Exemplo 2 
const a4 = [...numeros, ...nomes,];
console.log(a4);