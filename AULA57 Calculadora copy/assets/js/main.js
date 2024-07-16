// function criaCalculadora() {
//     return {
//         //Atributos
//         display: document.querySelector('.display'),
//         btnClear: document.querySelector('.btn-clear'),

//         //Métodos
//         inicia() {
//             this.cliqueBotoes();
//             this.clearDisplay();
//         },

//         cliqueBotoes() {
//             document.addEventListener('click', e => {
//                 const el = e.target;
                
//                 if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

//                 if (el.classList.contains('btn-clear')) this.clearDisplay();

//                 if (el.classList.contains('btn-del')) this.deleteOne();

//                 if (el.classList.contains('btn-eq')) this.realizaConta();

//                 this.display.focus();
//             });
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         deleteOne() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if(!conta) {
//                     alert('Conta inválida');
//                     return;
//                 } 

//                 this.display.value = String(conta);
//             } catch(e) {
//                 alert('Conta inválida');
//                 return;
//             }
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', (e) => {
//                 if (e.keyCode ===  13) {
//                     this.realizaConta();
//                 };
//             });
//         },
//     };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

function CriaCalculadora() {
    // Atributos
    this.display = document.querySelector('.display');


    // Métodos
    this.inicia = ()  => {
        this.cliqueBotoes();
        this.capturaEnter();
    },

    this.cliqueBotoes = () => {
        document.addEventListener('click', event => {
            const el = event.target;
    
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);

            if (el.classList.contains('btn-clear')) this.clearAll();

            if (el.classList.contains('btn-del')) this.deleteOne();
            
            if (el.classList.contains('btn-eq')) this.realizaConta();
        })
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.key !== 'Enter') return;
            this.realizaConta();
        })
    };

    this.btnParaDisplay = el => {
        this.display.value += el;
        this.display.focus();
    };

    this.clearAll = () => this.display.value = '';

    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            this.display.value = conta;

        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    };
}

const calculadora = new CriaCalculadora();
calculadora.inicia();