const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const showFeedback = message => {
  feedback.style.display = 'block'
  feedback.textContent = message
}

const isAvalidUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
  event.preventDefault()

  const isAValid = isAvalidUsername(event.target.username.value)

  if (isAValid) {
    showFeedback('Username válido =)')
    return
  }

  showFeedback('Username deve conter de 6 a 12 caracteres e deve conter apenas letras.')
})

form.username.addEventListener('keyup', event => {
  const isAValid = isAvalidUsername(event.target.value)
  
  if(isAValid){
    form.username.classList.add('success')
    form.username.classList.remove('error')
    return
  }

  form.username.classList.add('error')
  form.username.classList.remove('sucess')
})