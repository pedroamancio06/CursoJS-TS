function getDate(dayWeek) {
    let result;

    switch (dayWeek) {
        case 0: 
            result = 'Domingo';
            return result;
        case 1: 
            result = 'Segunda';
            return result;
        case 2: 
            result = 'Terça';
            return result;
        case 3: 
            result = 'Quarta';
            return result;
        case 4: 
            result = 'Quinta';
            return result;
        case 5: 
            result = 'Sexta';
            return result;
        case 6: 
            result = 'Sábado';
            return result;
    }
}

const date = new Date();
const dayWeek = date.getDay();
const result = getDate(dayWeek);

console.log(dayWeek, result);