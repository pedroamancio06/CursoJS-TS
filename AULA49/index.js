const varFuncao = function() {
    console.log('Função criada');
};

function realizar(funcao) {
    funcao();
}
realizar(varFuncao);

const obj = {
    falar() {
        console.log('Funcão 2 criada');
    }
}

obj.falar();