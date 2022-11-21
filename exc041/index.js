// strings
const names = ['eduardo', 'chalme', 'são', 'conceição']

names.sort()

console.log(names)

// numbers

//Objetos
const theBigFamily = [
  { name: 'Lineu', score: 10},
  { name: 'Nenê', score: 70},
  { name: 'Tuco', score: 50},
  { name: 'Bebel', score: 30},
  { name: 'Agostinho', score: 20},
]

// theBigFamily.sort((item1, item2) => {
//   if(item1.score > item2.score){
//     return -1
//   }else if(item2.score > item1.score){
//     return 1
//   }

//   return 0
// })

theBigFamily.sort((item1, item2) => item1.score - item2.score)

theBigFamily.forEach(item => {
  console.log(item)
})
console.log(theBigFamily)


// Numbers

let numbers = [4, 69, 329, 45, 23, 69, 234]

numbers.sort((number1, number2) => number1 - number2)

console.log(numbers)