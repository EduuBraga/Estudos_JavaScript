const numbers = [38, 99, 47, 68, 25]

const numbersGreaterThan38 = numbers.filter(item => item > 38)

console.log(numbersGreaterThan38)
console.log(numbers)



const users = [
  { name: 'Eduardo', primium: true },
  { name: 'Vitória', primium: false },
  { name: 'Conceição', primium: false },
  { name: 'Ponciano', primium: true },
  { name: 'Chalme', primium: true }
]

const usersPremium = users.filter(user => user.primium)

console.log({ usersPremium, users })



const filter = (array, func) => {
  let arrayFiltered = [];

  array.forEach(item => {
    if (func(item)) {
      arrayFiltered.push(item);
    }
  });
  return arrayFiltered
}

console.log(filter(['Eduardo', 'Ponciano', 'Dudu'], item => item === 'Eduardo'))