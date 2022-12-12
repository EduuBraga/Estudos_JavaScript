/*
  01

  - Ao descomentar o código abaixo, um erro será lançado;
  - Solucione esse problema sem declarar uma constante "book".
*/

console.log(book)

/*
  02

  - Implemente uma função que, ao ser invocada, recebe um array com 3 itens;
  - A função deve retornar um novo array em que:
    - O 1º item é o 3º item do array recebido por argumento;
    - O 2º item é o 1º item do array recebido por argumento;
  - Implemente a função da forma mais concisa que você conseguir.
*/

const reverseArray = array => {
  let newArray = []
  let lastIndex = array.length - 1

  newArray.push(array[lastIndex])
  newArray.push(array[0])

  return newArray
}

const reverseArrayTwo = array => [array[2], array[0]]

const swap = ([fist, , third]) => [third, fist]

console.log(swap([5, 7, 1]))
console.log(reverseArray([5, 7, 1]))
console.log(reverseArrayTwo([5, 7, 1]))


/*
  03

  - Em uma declaração, faça o destructuring apenas da propriedade 'name' do 
    objeto com o id 3.
*/

const topics = [
  { id: 1, name: 'Artes & cultura' },
  { id: 2, name: 'Negócios & finanças' },
  { id: 3, name: 'Carreiras' }
]

const { name } = topics.filter(item => item.id === 3)[0]
const { name: nameTwo } = topics[2]
const [, , { name: nameThree }] = topics

console.log(name, nameTwo, nameThree)

/*
  04

  - O 2º item do array abaixo contém as cores RGB;
  - Em uma declaração, faça o destructuring dos valores desse item em 3 consts: 
    'red', 'green' e 'blue'.
*/

const colors = ['#FF00FF', ['#FF0D0D', '#0AFA00', '#011EFA'], '#7BF0FF']

const [red, green, blue] = colors[1]
const [, [red2, green2, blue2]] = colors

console.log(red, green, blue)
console.log(red2, green2, blue2)

/*
  05

  - Descomente o código abaixo e implemente a função greet;
  - Observe que ela recebe 2 argumentos, um objeto e uma string;
  - Dentro da declaração da função:
    - Faça um destructuring no objeto recebido no 1º argumento;
    - No destructuring, nomeie de forma dinâmica a const que você está
      declarando, usando o 2º argumento que a invocação da função recebeu.
      Você já conhece a sintaxe que nomeia de forma dinâmica;
    - Atribua "desconhecido" como valor default da const do destructuring;
    - Faça a função retornar "Olá, meu nome é [NOME]!".
*/

const greet = (obj, propsDinamic) => {
  const { [propsDinamic]: name = 'Desconhecido'} = obj
  return `Olá, meu nome é ${name}`
}

console.log(greet({ name: 'Eduardo' }, 'name'))
console.log(greet({ age: 19 }, 'age'))
console.log(greet({}, 'personName'))