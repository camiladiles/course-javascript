// > OPERADORES BOOLEANOS

// Igualdade:           == (ou ===)
// Desigualdade:        != (ou !==)
// Maior que:           >
// Maior ou igual:      >=
// Menor que:           <
// Menor ou igual:      <=

const numero = 10

console.log(numero == 10)
console.log(numero != 15)
console.log(numero > 20)

console.log(numero == 10 )
console.log(10 == '10') // so compara conteudo
console.log(10 === '10') // aqui compara apenas número

console.clear() // limpa todos os consoles acima para não poluir o terminal

console.log(10 != 10)
console.log(10 != '10')
console.log(10 !== '10')



// - Conjunções Lógicas

// AND => &&

let idade = 30
let tenhoCNH = true

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log('Posso dirigir? ', possoDirigir)

// OR => ||

idade = 40

const votoFacultativo = idade < 18 || idade >= 70

console.log('Voto facultativo? ', votoFacultativo)

// NOT => !

const estouGostandoDoCurso = false

console.log('Esta gostando do curso?', estouGostandoDoCurso)
console.log('Esta gostando do curso?', !estouGostandoDoCurso)
