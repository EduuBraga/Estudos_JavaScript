const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const stringIngredients = ingredients.reduce((acc, item, index, array) => {
  let correctWordGender1 = /a$/.test(item) ? 'cozida' : 'cozido'
  // let correctWordGender2 = item[item.length - 1] === 'a' ? 'cozida' : 'cozido'
  // let correctWordGender3 = item.lastIndexOf('a') === item.length - 1 ? 'cozida' : 'cozido'

  if (index === array.length - 1) {
    return acc + `${item} ${correctWordGender1}`
  }

  return acc + `${item} ${correctWordGender1}, `
}, '')

console.log(stringIngredients)





const games = [
  { name: 'Dark Souls 3', type: 'darkFantasy' },
  { name: 'God of War Ragnarok', type: 'Action-adventure' },
  { name: 'The witcher 3 ', type: 'darkFantasy' },
  { name: 'A Plague Tale: Innocence', type: 'Action-adventure' },
]

const gamesCategory = games.reduce((gamesCategory, gameCurrent)=> {
  gamesCategory[gameCurrent.type] = gamesCategory[gameCurrent.type] || []
  gamesCategory[gameCurrent.type].push(gameCurrent)

  return gamesCategory
}, {})

console.log(gamesCategory)

// {darkFantasy: Array(2), Action-adventure: Array(2)}
// Action-adventure: Array(2)
//   0: {name: 'God of War Ragnarok', type: 'Action-adventure'}
//   1: {name: 'A Plague Tale: Innocence', type: 'Action-adventure'}
// darkFantasy: Array(2)
//   0: {name: 'Dark Souls 3', type: 'darkFantasy'}
//   1: {name: 'The witcher 3 ', type: 'darkFantasy'}




const userScores = [
  {name: 'João paulo', score: 50},
  {name: 'Alberto', score: 100},
  {name: 'Davi luis', score: 10},
  {name: 'Francisco junior', score: 70},
]

const userScoresOrde = userScores.sort((a, b) => a.score - b.score )

console.log(userScoresOrde)
