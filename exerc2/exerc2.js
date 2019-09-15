/** A função ira retorna um valor somado com o seu anterior. */
function Fibonacci() {            // Inserindo um valor
    let fib = [0,1];
    let i = 0;
    let soma = 0;

    while (fib[0] + fib[1] < 4000000) {
        i = fib[0] + fib[1];
        fib[0] = fib[1];
        fib[1] = i;
    
            if(i % 2 === 0){
            soma += i;
        }
    }

    return soma;
}

console.log(Fibonacci())
let tela = document.querySelector("#telaFibonacci");
tela.innerHTML = `Os números somados é igual a ${Fibonacci()}`