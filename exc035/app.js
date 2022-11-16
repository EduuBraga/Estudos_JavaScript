/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no i.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/

const form = document.querySelector('form')

const isAValidUsername = username => /[a-zA-Z]{6,}/.test(username)

const removeFeedback = () => {
  const feedbackUsername = document.querySelector('.feedback-username')

  if (feedbackUsername) { feedbackUsername.remove() }
}

const createParagraphForFeedback = (classFeedback, text) => {
  const paragraph = document.createElement('p')
  paragraph.textContent = text
  paragraph.setAttribute('class', classFeedback)
  form.insertAdjacentElement('afterend', paragraph)
}

form.username.addEventListener('keyup', event => {
  const isAValid = isAValidUsername(event.target.value)

  if (event.code === 'Enter') { return null }

  removeFeedback()

  if (isAValid) {
    createParagraphForFeedback('username-success-feedback feedback-username',
      'Username válido =)')
  } else {
    createParagraphForFeedback('username-help-feedback feedback-username',
      'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas')
  }
})

/*
  02

  - Valide o envio do form;
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "Por favor, insira um username válido".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no i.html.
*/

form.addEventListener('submit', event => {
  event.preventDefault()

  const InputValid = isAValidUsername(event.target.username.value)

  removeFeedback()

  if (InputValid) {
    createParagraphForFeedback('submit-success-feedback feedback-username', 'Dados enviados =)')
  } else {
    createParagraphForFeedback('submit-help-feedback feedback-username', 'Por favor, insira um username válido')
  }
})

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const some = (array, callback) => {
  for (let i = 0; array.length > i; i++) {
    if(callback(array[i])){
      return true
    }
  }
  return false
}

console.log(some([0, 4, 5], item => item === 3))
