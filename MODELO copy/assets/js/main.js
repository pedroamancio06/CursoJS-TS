const textTarefa = document.querySelector('#text_tarefa');
const botaoAdicionar = document.querySelector('#botao_adicionar');
const resultado = document.querySelector('#resultado');


function criaLi() {
    const li = document.createElement('li');
    return li; 
}

textTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) { //13 é o código da tecla 'ENTER'
        if (!textTarefa.value) return;
        criarTarefa(textTarefa.value);
        limparInput();
    }
});

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    li.appendChild(botaoApagar);

    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
}

function criarTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    resultado.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
}

function adicionarTarefa() {
    if (!textTarefa.value) return;
    criarTarefa(textTarefa.value);
    limparInput();
}

function limparInput() {
    textTarefa.value = '';
    textTarefa.focus();
}

function apagarTarefa(e) {
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
}

function salvarTarefas() {
    const liTarefas = resultado.querySelectorAll('li')
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(tarefas);

    for (tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

botaoAdicionar.addEventListener('click', adicionarTarefa); 
document.addEventListener('click', apagarTarefa);