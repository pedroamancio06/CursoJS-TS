// const carros = [
//     {chave: 2, nome: 'Palio'},
//     {chave: 3, nome: 'HRV'},
//     {chave: 4, nome: 'Fox'},
//     {chave: 1, nome: 'Uno'},
// ];

// const ordemCarros = new Map();
// for (const carro of carros) {
//     const {chave} = carro; // Atribuição via desestruturação
//     ordemCarros.set(chave, {...carro});
// };

// console.log(ordemCarros.get(2));

const ordemCarros = new Map([]);
ordemCarros.set('01', 'Palio');
ordemCarros.set('02', 'Hrv');
ordemCarros.set('03', 'Fox');

for (const carro of ordemCarros) {
    console.log(carro);
}
