const funcaoNumero = (numero) => {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz';
    if (numero % 5 == 0) return 'Buzz';
    if (numero % 3 == 0 ) return 'Fizz ';
    return numero;
}       

console.log(funcaoNumero('a'));
