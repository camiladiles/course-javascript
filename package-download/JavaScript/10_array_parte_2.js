// > ARRAYS (listas) [] - PARTE 2 - MÉTODOS DE ARRAYS

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2))
console.log(arr1.slice(2, 4))
console.log(arr1.slice(3))

console.clear()

// Adicionando elementos: push | unshift

console.log('Antes de adicionar:', arr2)

arr2.push(10, 20, 30)
arr2.push(40) // push sempre adiciona no fina do array

console.log('Depois de adicionar:', arr2)



console.log('Antes de adicionar com unshift:', arr2)

arr2.unshift(0)

console.log('Depois de adicionar com unshift:', arr2)

console.clear()

// Removendo elemento: pop | shift

console.log('Antes de remover com pop:', arr2)

const elementoRemovido = arr2.pop() //remove o ultimo elemento

console.log('Depois de remover com pop:', arr2)
console.log('O elemento removido foi:' ,elementoRemovido)


console.log('Antes de remover com shift:', arr2)

arr2.shift() //remove o primeiro elemento

console.log('Depois de remover com shift:', arr2)

console.clear()

// Concatenando arrays: concat

console.log(arr1)
console.log(arr2)

console.log(arr1.concat(arr2)) //começa no 1 e termina no 2

console.log(arr2.concat(arr1)) //começa no 2 e termina no 1

console.clear()


// Buscando elementos: indexOf | lastIndexOf

console.log(arr1)

let indexDoElemento34 = arr1.indexOf(34) 

console.log(indexDoElemento34)

/* 
se colocar um numero que n tem no array aparece -1
Se tiver dois números igual no array ele retorna o index do primeiro
*/

const arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.indexOf(3))

console.log(arr3.lastIndexOf(3))

console.clear()

// Descobrindo a existencia de um elemento: includes

console.log(arr1)

console.log(arr1.includes(10))

console.clear()


// Invertendo arrays: reverse

console.log(arr1)

const arr1Invertido = arr1.reverse()

console.log(arr1Invertido)
