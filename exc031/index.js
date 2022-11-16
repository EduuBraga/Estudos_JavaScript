const form = document.querySelector('.signup-form')
const h1 = document.querySelector('h1')

form.addEventListener('submit', event => {
  event.preventDefault()

  h1.innerText = event.target.username.value
  console.log(event.target.username.value)  
})

const username = 'Carlos eduardo'

const az = /[a-z]{6,}/
const numbers = /[0-9]{2,}/
const resultAZ = az.test(username)
const resultNumbers = numbers.test(username)

if(resultAZ && resultNumbers){
  console.log('O teste foi bem sussedido =)')
}else{
  console.log('O teste não foi aprovado =(')
}

const result = username.search(az)
console.log(result)