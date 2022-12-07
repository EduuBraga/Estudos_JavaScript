const stg = 'Carlos Eduardo Ponciano Braga'

console.log(stg.split()) // ['Carlos Eduardo Ponciano Braga']
console.log(stg.split('')) // ['C', 'a', 'r', 'l', 'o', 's', ' ', 'E', 'd', 'u', 'a', 'r', 'd', 'o', ' ', 'P', 'o', 'n', 'c', 'i', 'a', 'n', 'o', ' ', 'B', 'r', 'a', 'g', 'a']
console.log(stg.split(' ')) // ['Carlos', 'Eduardo', 'Ponciano', 'Braga']
console.log(stg.split('a')) // ['C', 'rlos Edu', 'rdo Ponci', 'no Br', 'g', '']

const obj = {
  name: 'Eduardo Braga',
  email: 'eduardo.braga467@gmail.com',
  age: 19,
  gender: 'male',
  city: 'Pentecoste-CE'
}

console.log(Object.keys(obj))

const split = (stg, separator) => {
  let arraySplitted = []
  let accumulator = ''

  for (let i = 0; i < stg.length; i++) {
    const letterCurrent = stg[i];
    const isSeparable = letterCurrent === separator
    const lastIndex = i + 1 === stg.length
    const stringEmpty = separator === ''

    accumulator += letterCurrent

    if(stringEmpty){
      arraySplitted.push(letterCurrent)
      continue
    }

    if(isSeparable){
      arraySplitted.push(accumulator)
      accumulator = ''
    }

    if(lastIndex){
      arraySplitted.push(accumulator)
    }
  }

  return arraySplitted
}

console.log(split('Carlos Eduardo Ponciano Braga', ''))