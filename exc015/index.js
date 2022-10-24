// Objetos
let user = {
  name: 'Eduardo',
  age: 18,
  email: 'eduardo.braga467@gmail.com',
  city: 'Ceará',
  blogPosts: [
    { title: '4 games com temática de terror', likes: 546 },
    { title: 'O Melhor gamer do ano foi [...]', likes: 132 }],
  login: function () {
    console.log('usuário logado')
  },
  logout: () => {
    console.log('usuário deslogado.')
  },
  logBlogPosts: () => {
    console.log(`O usuário ${user.name} escreveu os seguintes posts:`)

    user.blogPosts.forEach(item => {
      console.log(`"${item.title}" com ${item.likes} likes`)
    })
  }
}

console.log(user.name)

user.name = 'Eduardo Braga'

console.log(user.name)
console.log(user['age'])

user.login()
user.logout()
user.logBlogPosts()


// Objeto math


let n = Math.pow(4, 3)
console.log(n)

let number = 7.7

console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))
console.log(Math.trunc(number))


const randomNumber = Math.random()

console.log(randomNumber)

console.log(Math.round(randomNumber))

console.log(Math.round(randomNumber * 50))