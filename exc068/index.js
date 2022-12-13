const games = [
  {
    name: 'God Of War: Ragnarok',
    id: 1
  },
  {
    name: 'The Witcher 3',
    id: 2
  },
  {
    name: 'A Plague Tale: Innocence',
    id: 2
  },
]

console.log(games.find(game => game.id === 2))


const myObj = {
  name: 'Eduardo',
  lastname: 'Braga',
  username: 'EduuBraga',
  age: 19,
  city: 'Pentecoste',
  state: 'Ceará'
}

console.log(Object.entries(myObj))

// (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0 : (2) ['name', 'Eduardo']
// 1 : (2) ['lastname', 'Braga']
// 2 : (2) ['username', 'EduuBraga']
// 3 : (2) ['age', 19]
// 4 : (2) ['city', 'Pentecoste']
// 5 : (2) ['state', 'Ceará']


const attributes = {
  class: 'input-form',
  id: 'input',
}

const AtributesToArray = Object.entries(attributes)

const AtributesToHTML = AtributesToArray
  .reduce((acc, [key, value]) => acc += ` ${key}="${value}"`, '')

console.log(AtributesToHTML)