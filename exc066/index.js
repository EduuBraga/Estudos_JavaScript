localStorage.setItem('name', 'Eduardo')
localStorage.setItem('age', 19)

let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(name, age)

const myArray = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 5 }
]

localStorage.setItem('myArray', JSON.stringify(myArray))
const JSONToLocalStorage = localStorage.getItem('myArray')

console.log(JSONToLocalStorage)
console.log(JSON.parse(JSONToLocalStorage))