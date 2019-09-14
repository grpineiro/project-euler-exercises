function somaDosMulti(limi) {
    let soma = 0;
    for (let i = 3; i < limi; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }
    return soma;
}

let tela = document.querySelector('#telaResul')
tela.innerHTML = somaDosMulti(1000)