const Pessoa = require('./mod');
const p1 = new Pessoa('Pedro', '19', 'desenvolvedor!');
console.log(p1.cria());

// __filename e __dirname:
const path = require('path'); // É um módulo interno, ou seja, já existente.
console.log(__filename); // caminho do arquivo
console.log(__dirname); // caminho da pasta onde está esse arquivo

console.log(path.resolve(__dirname, '..', '..', 'imgs')) /* com o "path.resolve()" podemos 
acessar qualquer arquivo e pasta, nesse caso voltamos dois com ".." e adicionamos a pasta "imgs"
*/

