function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    }
}

console.dir(retornaFuncao('Pedro'));