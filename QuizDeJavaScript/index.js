const form = document.querySelector('form');
const containerFinalScore = document.querySelector('.container_final_score');
const finalScore = document.querySelector('.final_score');
const qtyAnswersCorrectFinalScore = document.querySelector('.qty_final_score');

let correctAnswers = ['A', 'B', 'C', 'B', 'A', 'C'];
let score = 0;
let qtyUserCorrectAnswers = 0;

const GetUserAnswers = () => {
  let userAnswers = [];

  for (let index in correctAnswers){
    let userAnswer = form[`inputQuestion${++index}`].value;
    userAnswers.push(userAnswer);
  }

  return userAnswers;
}

const StartAnimationResult = () => {
  let counter = 0;

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer);
    }

    finalScore.textContent = `${counter++}%`;
  }, 20);
}

const calculateUserScore = userAnswers => {
  correctAnswers.forEach((correctAnswer, index) => {
    const isCorrectUserAnswer = correctAnswer === userAnswers[index];

    if (isCorrectUserAnswer) {
      score += 17;
      qtyAnswersCorrectFinalScore.textContent = qtyUserCorrectAnswers += 1

      if (score > 100) { score = 100; }
    }
    else {
      let incorrectAnswer = document.querySelector(`.container-question${++index}`)
      incorrectAnswer.classList.add('border-danger')
      incorrectAnswer.classList.add('border')
    }
  });
}

const toggleColorQtyCorrectAnswer = () => {
  let classes = [
    'text-danger',
    'text-warning',
    'text-warning',
    'text-success',
    'text-success',
    'text-primary'
  ];

  classes.forEach(className => {
    qtyAnswersCorrectFinalScore.classList.remove(className);
  });

  let indexClassToElement = qtyUserCorrectAnswers - 1;
  let classToElement = classes[indexClassToElement];

  qtyAnswersCorrectFinalScore.classList.add(classToElement);
}

const showFinalScore = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  containerFinalScore.classList.remove('d-none');
}

const cleanScores = () => {
  if (score !== 0) {
    score = 0;
    qtyUserCorrectAnswers = 0;
  }
}

const removeClassesIncorrectAnswers = () => {
  let incorrectAnswer = document.querySelectorAll('.border-danger')

  incorrectAnswer.forEach(answer => {
    answer.classList.remove('border')
    answer.classList.remove('border-danger')
  })
}

form.addEventListener('submit', event => {
  event.preventDefault();

  // Remove os feedback de resposta incorretas
  removeClassesIncorrectAnswers()

  // Limpando pontuação
  cleanScores();

  // obtém as respostas do usuário
  const userAnswers = GetUserAnswers();

  // calcula a pontuação do usuário
  calculateUserScore(userAnswers);

  // muda a cor da quantidade de respostas certas do usuário
  toggleColorQtyCorrectAnswer()

  // exibe a pontuação final
  showFinalScore();

  // Inicia a animação da pontuação final
  StartAnimationResult();
});