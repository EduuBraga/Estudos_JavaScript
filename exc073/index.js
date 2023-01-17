// class User{
//   constructor(name, email){
//     this.name = name
//     this.email = email
//   }
// }

function User(name, email) {
  this.name = name
  this.email = email

  this.login = function () {
    return `${this.name} logado com sucesso!`
  }
}

const user = new User('eduardo', 'dudu@gmail.com')

console.log(user.login())


const test = () => {
  console.log(this)
}

test()

//window {window: Window, self: Window, document: document, name: '', location: Location, …}


const createUser = (name, email) => {
  let counter = 0

  return {
    name,
    email,
    login: () => `${name} logado com sucesso!`,
    getCounter: () => counter,
  }
}

const user2 = createUser('Eduardo Braga', 'eduardo.braga467@gmail.com')

console.log(user2.getCounter())
// console.log(counter)