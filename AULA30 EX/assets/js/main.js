// function exibirResultado() {
//     const date = new Date('1971-09-22 14:04');
//     const day = date.getDay();
//     const numberDay = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();

//     const resultDay = dayWeek(day);
//     const resultMonth = monthYear(month);

//     const allResult = document.querySelector('h1');
//     allResult.innerHTML = `${resultDay}, ${numberDay} de ${resultMonth} de ${year} ${zeroInFront(date.getHours())}:${zeroInFront
//     (date.getMinutes())}`;
// }

// function dayWeek(day) {
//     let resultDay;

//     switch (day) {
//         case 0: 
//             resultDay = 'Domingo';
//             return resultDay;
//         case 1: 
//             resultDay = 'Segunda-feira';
//             return resultDay;
//         case 2: 
//             resultDay = 'Terça-feira';
//             return resultDay;
//         case 3: 
//             resultDay = 'Quarta-feira';
//             return resultDay;
//         case 4: 
//             resultDay = 'Quinta-feira';
//             return resultDay;
//         case 5: 
//             resultDay = 'Sexta-feira';
//             return resultDay;
//         case 6: 
//             resultDay = 'Sábado';
//             return resultDay;
//     }
// }

// function monthYear(month) {
//     let resultMonth;

//     switch (month) {
//         case 1: 
//             resultMonth = 'janeiro';
//             return resultMonth;
//         case 2: 
//             resultMonth = 'fevereiro';
//             return resultMonth;
//         case 3: 
//             resultMonth = 'março';
//             return resultMonth;
//         case 4: 
//             resultMonth = 'abril';
//             return resultMonth;
//         case 5: 
//             resultMonth = 'maio';
//             return resultMonth;
//         case 6: 
//             resultMonth = 'junho';
//             return resultMonth;
//         case 7: 
//             resultMonth = 'julho';
//             return resultMonth;
//         case 8: 
//             resultMonth = 'agosto';
//             return resultMonth;
//         case 9: 
//             resultMonth = 'setembro';
//             return resultMonth;
//         case 10: 
//             resultMonth = 'outubro';
//             return resultMonth;
//         case 11:
//             resultMonth = 'novembro';
//             return resultMonth;
//         case 12: 
//             resultMonth = 'dezembro';
//             return resultMonth;
        
//     }
// }

// function zeroInFront(num) {
//     return num >= 10 ? num : `0${num}`;
// }

// exibirResultado();

const allResult = document.querySelector('h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

allResult.innerHTML = data.toLocaleString('pt-BR', opcoes);
