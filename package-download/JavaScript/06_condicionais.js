// > CONDICIONAIS: if
// So vai imprimir uma das coisas dependendo da condição

const idade = 17;

if (idade >= 18) {
    console.log('Você é maior de idade!')
} else {
    console.log('Você não é maior de idade!')
}

// Se media >= 7, aprovado
// Se media < 7, recuperação
// Se media < 5, reprovado
 
console.clear() // limpando as saidas anteriores

let media = 8

if (media >= 7) {
   console.log('Aprovado(a)!') 
} else if (media >= 5) {
    console.log('Recuperação')
} else {
    console.log('Reprovado(a)')
}
