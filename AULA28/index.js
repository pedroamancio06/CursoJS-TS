//Documentação mozilla

function saudacoes(hora) {  //Param 'hora' criado para ser recebido pela const 'hora'. 
    if (hora < 12) {
        return 'Bom dia!';
    } else if (hora < 18) {
        return 'Boa tarde!';
    } else if (hora <= 23) {
        return 'Boa noite!';
    }
}

const data = new Date('2023-02-14 05:00:00');
const hora = data.getHours();
const resultado = saudacoes(hora);
console.log(resultado);
