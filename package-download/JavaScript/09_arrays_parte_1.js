// > ARRAYS (listas) []

// - Como criar um array?

let arr = ['Camila', 30, 1.67, true]

console.log(arr)

// - Como acessar os alementos do array

console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('Terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])

// - Como obter o tamanho do array (quantos elementos tem)

console.log(arr.length)

// - Percorrendo arrays

console.clear()

// forma 01
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

console.clear()

// forma 02
for (let elemento of arr) {
    console.log(elemento)
}

console.clear()

// forma 03
for (let indice in arr) {
    console.log(indice, arr[indice])
}
