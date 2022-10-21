// Function declaration
function sayHi() {
  console.log('Olá!')
}

// Function expression
const food = function () {
  console.log('pizza!')
}

sayHi()
sayHi()

food()
food()

/*
  Hoisting
*/

// sayHiEduardo()
// sayHiEduardo()

function sayHiEduardo() {
  console.log('Olá, Edaurdo!')
}


/*
  Argumentos, parâmetros e default parameters
*/

//                     Parâmetros
const hiPerson = function (name = "José", lastName = "Augusto") {
  console.log(`Olá, ${name} ${lastName}!`)
}

hiPerson()
//Argumentos
hiPerson("Eduardo", "Braga")


// Return

const doubleNumber = function (number) {
  console.log(number * 2)
}
doubleNumber(3)

const doubleNumberTwo = function (number){
  const resultCalc = number * 2
  return resultCalc
}

const result = doubleNumberTwo(24)

const showResult = function (result){
  return `O resultado foi: ${result}`
}

console.log(showResult(result))

/*  
    Arrow function 
*/

//Function expression normal
// const double = function (number){
//   return number * 2
// }

//Function expression arrow function
const double = (number) => number * 2

const resultDouble = double(5)
console.log(resultDouble)
