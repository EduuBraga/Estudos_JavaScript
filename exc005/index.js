// Boleanos
const age = 18

// console.log(age == 18)
// console.log(age != 18)
// console.log(age != 19)
// console.log(age > 18) Ele não é maior que 18, ele é igual a 18
// console.log(age >= 18)
console.log

const name = 'eduardo'
// console.log(name == 'eduardo')
// console.log(name > 'carlos')
//O JS segue como parâmetro a ordem alfabetica, logo "e" vem depois 
// de "c". Fazendo a comparação retornar true

const nameMaius = 'Eduardo'
// console.log(nameMaius > 'carlos')
//O JS segue como primeiro o alfabeto minusculo depois o maisculo
// logo o resultado da operação é false

//Conversão de tipos explicitas 

let score = '100'
score = Number(score)
console.log(score + 1)