//Método Splice

//.splice(índice, quantidadeDeElementosQueSeraoDeletados, adicionaElem1, adicionaElem2, adicionaElem3)

//Simulando .pop
const nomes = ['Pedro', 'João', 'Maria', 'Eduardo'];
const removeUltimo = nomes.splice(-1, 1);
console.log(nomes, removeUltimo);

console.log('');

//Simulando .push
const nomes2 = ['Pedro', 'João', 'Maria', 'Eduardo'];
const adicionaNoFinal = nomes2.splice(nomes2.length, 0, 'Jonas', 'Flavia');
console.log(nomes2);

console.log('');

//Simulando .shift 
const nomes3 = ['Pedro', 'João', 'Maria', 'Eduardo'];
const removePrimeiro = nomes3.splice(-4, 1);
console.log(nomes3, removePrimeiro) 

console.log('');

//Simulando .unshift \
const nomes4 = ['Pedro', 'João', 'Maria', 'Eduardo'];
const adicionaNoComeco = nomes4.splice(0, 0, 'José');
console.log(nomes4);