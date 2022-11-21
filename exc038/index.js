// Método map

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(number => number * 2)

console.log(doubleNumbers, numbers)



const prices = [10, 20, 55, 30, 5, 80]

const promotionPrices = prices.map(price => price / 2)

console.log(promotionPrices, prices)



const products = [
  { name: 'mouse', price: 15 },
  { name: 'monitor', price: 35 },
  { name: 'notebook', price: 65 },
  { name: 'teclado', price: 25 },
  { name: 'cpu', price: 45 },
]

const productsPromotion = products.map(product => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 }
  }

  return product
})

console.log(products, productsPromotion)



//Criando meu método map
const map = (array, func) => {
  let arrayMap = []

  array.forEach(item => {
    let itemModified = func(item)
    arrayMap.push(itemModified)
  })

  return arrayMap
}

const crazyArray = map([3, 5, 2], item => item + 20)

console.log(crazyArray)