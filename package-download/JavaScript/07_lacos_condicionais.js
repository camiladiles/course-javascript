// > LAÇOS CONDICIONAIS: While
// Vai imprimir algo varias vezes até que seja verdadeiro

const imput = require('readline-sync')

let numero = Number( imput.question('Qual número você escolhe?') )

const numero_sorteado = 5;

console.log(numero, typeof numero)

while (numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente!')

    numero = Number( imput.question('Qual número você escolhe?') )
    
    numero = Number( imput.question('Qual número você escolhe?') )
}

console.log('Você acertou')
