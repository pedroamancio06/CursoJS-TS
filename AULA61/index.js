//Exemplo 1
function* gerador() {
    yield 1;

    yield 2;

    yield 3;
}

const gerador1 = gerador();

for (let valor of gerador1) {
    console.log(valor);
}

console.log('')

//Exemplo 2
function* geradora2() {
    let i = 0;

    while(i < 10) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

console.log('');

//Exemplo 3
function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

console.log('');

// Exemplo 4
function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();