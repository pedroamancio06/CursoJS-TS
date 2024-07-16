const array1 = ['Pedro', 'Henrique', 'Amancio', 'Lopes'];

console.log(array1.length);

// .pop() remove o último elemento
const removido = array1.pop();
console.log(array1, removido);

console.log();

// .shift() remove o primeiro elemento
const removeOPrimero = array1.shift();
console.log(array1, removeOPrimero);

console.log();

// .push() adiciona elementos no final
array1.push('Carlos', 'João');
console.log(array1);

console.log();

//Valor por referência 
//Positivos      0         1        2         3         4          5
//Negativos      -6       -5       -4        -3        -2         -1
const nomes = ['Pedro', 'Carlos', 'João', 'Adriana', 'hhhhhh', 'ccccccc'];
console.log(nomes.slice(0, -4));

console.log();

// Separa o valor transformando-o em array
const nome = 'Pedro Henrique Amancio Lopes';
const separa = nome.split(' ');
console.log(separa);

console.log();

// Une o array transformando-o em valor
const nomes2 = [ 'Pedro', 'Henrique', 'Amancio', 'Lopes' ];
const nome2 = nomes2.join(' ');
console.log(nome2);

