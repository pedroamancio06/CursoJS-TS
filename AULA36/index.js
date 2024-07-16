const carros = {
    modelo: 'Punto',
    motor: 'Mille',
    fabricante: 'Fiat',
    ano: 2015,
};

for (let nomes in carros) {
    console.log(`${nomes}: ${carros[nomes]}`);
}