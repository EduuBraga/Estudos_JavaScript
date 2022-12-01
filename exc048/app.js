/*
  01

  - Crie uma função que recebe uma data por parâmetro e retorna a data na 
    formatação "DD/MM/AAAA". Exemplo: 03/07/2021;
  - Não utilize a date-fns.
*/

let present = new Date('01/23/2020 00:00:00')

const formatTime = time => {
  return time >= 10 ? time : `0${time}`
}

const dateBrazil = date => {
  const day = formatTime(date.getDate())
  const month = formatTime(date.getMonth() + 1)
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

console.log(dateBrazil(present))

/*
  02

  - Crie uma função que recebe uma data por parâmetro e retorna o horário e a 
    data na formatação: "03:07 - domingo, 7 de junho de 2020";
  - Não utilize a date-fns.
*/

const days = [
  'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'
]

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]

const date = new Date('11/23/2020 20:20:00')

const dateFormatting = date => {
  const hor = date.toLocaleTimeString().slice(0, 5)
  const dayWeek = days[date.getDay()]
  const dayOfMonth = date.getDate()
  const month = months[date.getMonth()]
  const year = date.getFullYear()

  return `${hor} - ${dayWeek}, ${dayOfMonth} de ${month} de ${year}`
}

console.log(dateFormatting(date))

/*
  03

  - Faça um destructuring nas propriedades "id" e "isVerified" do objeto abaixo;
  - Exiba os valores lado a lado, no console;
  - Não modifique a declaração da const user.
*/

const user = { id: 42, isVerified: true }
const { id, isVerified } = user
console.log(user, id, isVerified)

/*
  04

  - Faça um destructuring nas propriedades "name" dos objetos abaixo;
  - No destructuring, faça "Bender" ser armazenado por uma const "nameA" e 
    "HAL 9000" ser armazenado por uma const "nameB";
  - Exiba os valores das consts lado a lado, no console;
  - Não modifique a declaração das consts "robotA" e "robotB".
*/

const robotA = { name: 'Bender' }
const robotB = { name: 'HAL 9000' }

const { name: nameA } = robotA
const { name: nameB } = robotB

console.log(nameA, nameB)


/*
  05

  - Usando shorthand property names, crie um objeto com as propriedades "a", 
    "b" e "c";
  - O valor dessas propriedades deve ser o mesmo das consts "a", "b" e "c";
  - Exiba o objeto no console.
*/

const a = 'a'
const b = 'b'
const c = 'c'

const ABC = { a, b, c }
console.log(ABC)

const name1 = 'dudu'
const name2 = 'edu'
const name3 = 'du'

const names = { name1, name2, name3 }

console.log(names)

/*
  06

  - Refatore o código abaixo.
*/

const useDataSomewhereElse = value => {
  console.log(value)
}

const updateSomething = ({ target, property, willChange } = {}) => {
  if (willChange === 'valor indesejado') {
    willChange = 'valor desejado'
  }

  useDataSomewhereElse({ target, property, willChange })
}

updateSomething({ target: '1', property: '2', willChange: 'valor indesejado' })

/*
  07

  - O código abaixo é o mesmo do relógio digital que implementamos na aula 
    passada. Refatore-o.
*/

const clockContainer = document.querySelector('.clock-container')

const getClockHTML = (hours, minutes, seconds) => {
  return `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `
}

const updateClock = () => {
  const present = new Date()
  const hours = formatTime(present.getHours())
  const minutes = formatTime(present.getMinutes())
  const seconds = formatTime(present.getSeconds())

  clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)
