/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;
    
    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;
    
  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

const reverseString = string => string.split('').reverse().join('')

const reverseStringTwo = string => {
  let stringReverse = ''

  for (let i = 0; i < string.length; i++) {
    let indexInvertido = (string.length - 1) - i
    const latterCurrent = string[indexInvertido];

    stringReverse += latterCurrent
  }

  return stringReverse
}

const reverseStringThree = string => string.split('')
  .reduce((acc, latter) => latter + acc, '')

console.log(reverseStringTwo('123'))
console.log(reverseStringTwo('abc'))
console.log(reverseStringThree('dudu'))

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 15, 83, 91, 27, 33]
let foundNumber = false

numbers.forEach(number => {
  if (number === 15) {
    foundNumber = true
  }
})
console.log(foundNumber)

const foundNumberTwo = numbers.some(number => number === 15)
const foundNumberThree = numbers.includes(15)
console.log(foundNumberTwo, foundNumberThree)