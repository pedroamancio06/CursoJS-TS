// Crie uma matriz com todos os números de 1 a 6.
// Mostre a matriz.
// Exclua o primeiro e o último elemento e mostre o array resultante.
// Exclua o elemento de indice 2.

const array = [1, 2, 3, 4, 5, 6];
console.log(array);

array.shift();
console.log(array);

array.pop();
console.log(array);

array.splice(2, 1)
console.log(array);