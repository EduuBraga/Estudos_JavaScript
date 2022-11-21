const numbers = [1, 2, 3]

const sumNumbers = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumNumbers)

const usersGame = [
  { name: 'eduardo', score: 150 },
  { name: 'edu', score: 150 },
  { name: 'dudu', score: 150 },
  { name: 'eduardo', score: 150 },
  { name: 'vivi', score: 150 },
  { name: 'edu', score: 150 },
  { name: 'vivi', score: 150 },
  { name: 'dudu', score: 150 },
]

const duduScore = usersGame.reduce((accumulator, user) => {
  if (user.name === 'dudu') {
    accumulator += user.score
  }

  return accumulator
}, 0)

console.log(duduScore)