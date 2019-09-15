/** Retorne o fator primo de 600851475143. */
function fator() {
    let number = 600851475143;

    for (let i = 2; i < number; ++i) {
        while (number % i == 0) {
            number = number / i;
        }
    }

    console.log(number);
    return number;
}

// Mostre na tela.
let tela = document.querySelector('#telaResul')
tela.innerHTML = fator();