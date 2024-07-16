// Escrevendo e lendo arquivos
const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
}
/* 
    writeFile() -> escrever arquivo
    wiriteFile(caminho do arquivo, 'conteúdo do arquivo', {flag: },  );
    'conteudo\n' -> quebra de linha
    flag: 'a' -> a cada execução do código será adicionado o contéudo sem apagar o que estava.
    flag: 'w' -> a cada execução do código será adicionado o coteúdo porém será apagado o anterior.
*/