// Constructors
const numbers = [1, 2, 3]
const numbers2 = new Array(1, 2, 3)

console.log(numbers)
console.log(numbers2)

// Wrapper object
const str = 'meu_nome'
console.log(str.length)

// Class
class User {
  constructor(name, email){
    this.name = name
    this.email = email
  }
}

const user1 = new User('Eduardo', 'dudu@gamil.com.br')
const user2 = new User('Hellen Vitória', 'hv@gamil.com.br')

console.log(user1, user2)