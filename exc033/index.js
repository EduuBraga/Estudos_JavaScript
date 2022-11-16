const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const showFeedback = message => {
  feedback.style.display = 'block'
  feedback.textContent = message
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const username = event.target.username.value
  const usernameRegex = /^[a-zA-Z]{6,12}$/
  const isAValidUsername = usernameRegex.test(username)

  if(isAValidUsername){
    showFeedback('Username válido =)')
    return
  }

  showFeedback('Username deve conter de 6 a 12 caracteres e deve conter apenas letras.')
})
