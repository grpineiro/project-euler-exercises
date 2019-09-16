function checkPalin(cont) {
    return cont.toString() == cont.toString().split("").reverse().join("");
}

function Palindrome() {

    let array = [];    
    for (let i = 999; i > 100; i--) {
        for (let j = 999; j > 100; j--) {
            let mul = j * i;
            if (checkPalin(mul)) {
                array.push(j * i);
            }
        }
    }

    return Math.max.apply(Math, array);
}

console.log(Palindrome());
let tela = document.querySelector('#telaResul');
tela.innerHTML = Palindrome();

