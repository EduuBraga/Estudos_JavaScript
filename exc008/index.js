let input = document.querySelector('#input')
const para = document.querySelector('#p')
const btn = document.querySelector('#btn')

const regex = /[0-9]/

function changeInput() {
  let password = input.value

  if (password.length >= 12 && regex.test(password)) {
    para.innerText = 'Senha muito Form :)'
  } else if (password.length >= 8 || password.length >= 6 && regex.test(password)) {
    para.innerText = 'Senha forte :|'
  } else {
    para.innerText = 'Senha fraca :( : Coloque números'
  }
}

input.addEventListener('input', changeInput)


