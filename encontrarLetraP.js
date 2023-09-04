function encontrarLetraP(String) {
    var letras = String.split('');

    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === 'p') {
            console.log('Si contiene a p');
        }
    }
}
encontrarLetraP('JavaScript');
encontrarLetraP('Henry');
