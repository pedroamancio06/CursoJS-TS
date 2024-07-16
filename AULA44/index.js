try {
    const somar = (x, y) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            throw new Error('x e y precisam ser números!');
        }
        return x + y;
    }

    console.log(somar(20, 4));

} catch(err) {
    console.log('somar está errado');
}