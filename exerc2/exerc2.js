/** A função ira retorna um valor somado com o seu anterior. */
function Fibonacci(number) {            // Inserindo um valor
    if (number < 1) return 0;
    if (number <= 2) return 1;
    
    let fato2 = 0;
    let fato1 = 1;
    let fatoN = number;

    console.log(0);
    console.log(1);
    for (let i = 2; i <= number; i++) {
        fatoN = fato1 + fato2;
        fato2 = fato1;
        fato1 = fatoN;
        console.log(fatoN)
    }
    return fatoN;
}

let tela = document.querySelector("#telaFibonacci");
tela.innerHTML = `Os números somados é igual a ${Fibonacci(10)}`