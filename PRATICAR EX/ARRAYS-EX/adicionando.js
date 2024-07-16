// Crie uma matriz com todos os números ímpares menores que 10.
// Mostre a matriz com o alertcomando.
// Mostre quantos elementos o array contém.
// Adicione 2, 4, 6, 8 ao final do array e mostre novamente.
// Insira o valor 20 no 6º elemento do array e mostre o array novamente.

const inpar = [1, 3, 5, 7, 9];
console.log(inpar.length);

inpar.push(2, 4, 6, 8);
console.log(inpar);

inpar.splice(5, 0, 20);
console.log(inpar);