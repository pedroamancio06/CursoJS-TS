const elementos = [
    {tag: 'p', texto: 'Jogo 1'}, //0
    {tag: 'section', texto: 'Jogo 2'}, //1
    {tag: 'div', texto: 'Jogo 3'}, //2
    {tag: 'footer', texto: 'Jogo 4'}, //3
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);