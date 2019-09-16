// Essa função retorna o menor número positívo divisível entre os números de 1 a 20.
function smallMultiple() {
    let number = 2520;
    let smallMult = false;

    while (!smallMult) {
        number += 2520;
        let divide = true;

        for (let i = 11; i <= 20; i++) {
            if (number % i != 0) {
                divide = false;
                break;
            }
        }
        if (divide) {
            smallMult = true;
        }
    }
    return number;
}

// Exibi no console.
console.log(smallMultiple());

// Exibi na tela.
let tela = document.querySelector('#telaResul');
tela.innerHTML = smallMultiple();

