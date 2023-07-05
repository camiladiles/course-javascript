// > COERÇÃO (CONVERSÃO) DE TIPOS

// - 1. Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero)

const numeroEmFormatoDeString = String(10)
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString)

console.log(Number('12345'))
console.log(parseFloat('233.444')) // melhor sempre usar Number
console.log(parseInt('233.444')) // melhor usar Number
console.log(Boolean(1))  // '0' sempre sera falso, qualquer outro número é verdadeiro

console.clear()

// - 2. Coerção Implícita (Automática)
console.log(10 + 1 )
console.log(10 + '1' )
console.log('10' + 1 ) // quando é texto o JS faz concatenação
console.log('10' - 1 )
console.log('10' * 3 )

console.log(10 - 'kdjfsa') // NaN - Not a Number, por isso não consegue fazer.

console.clear()


// Outros exemplos

// Qual será a saída desse código?
let n = 1 + '1';

n = n - 1;

console.log(n);

// Qual será a saída desse código?
console.log(2 + 3 + 4 + '5'); //95

// Qual será a saída desse código?
console.log('5' + 2 + 3 + 4); //5234

// Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5'); //15
