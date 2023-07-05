// > FUNÇÕES

// - Definição da função
function saudacao() {
    console.log('Olá, seja bem vindo(a) ao nosso curso de JavaScript!')
}

saudacao()

console.clear()

// Como enviar parâmetros para as funções?

function saudacao(nome, curso = 'JavaScript') {
    console.log(`Olá, ${nome}! Seja bem vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Camila', 'HTML e CSS')

console.clear()

// Retorno da função: return (assim você pode usar o resultado depois)

function soma (numero1, numero2) {
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado)

console.clear()


function maiorDoQue50(numero) {
    if (numero > 50) {
        return true
    }

    return false 
}
const trueOrFalse = maiorDoQue50(60)

console.log(trueOrFalse)

console.log(maiorDoQue50(30))
