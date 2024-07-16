function chamada(max) {
    if (max >= 10) return;

    max++;

    console.log(max);
    chamada(max);
}

chamada(0);