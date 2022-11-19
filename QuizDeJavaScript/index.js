const form = document.querySelector('form');
const containerFinalScore = document.querySelector('.container_final_score');
const finalScore = document.querySelector('.final_score');
const qtyAnswersCorrectScore = document.querySelector('.qty_final_score');

let correctAnswers = ['A', 'B', 'C', 'B', 'A', 'C'];
let score = 0;
let qtyUserCorrectAnswers = 0;

const GetUserAnswers = () => {
  let userAnswers = [];

  correctAnswers.forEach((_, index) => {
    let userAnswer = form[`inputQuestion${index + 1}`].value;
    userAnswers.push(userAnswer);
  })

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
      qtyAnswersCorrectScore.textContent = qtyUserCorrectAnswers += 1

      if (score > 100) { score = 100; }
    }
  });
}

const toggleColorQtyCorrectAnswer = () => {
  let classes = [
    'text-danger',
    'text-danger',
    'text-warning',
    'text-warning',
    'text-success',
    'text-primary'
  ];

  classes.forEach(className => {
    qtyAnswersCorrectScore.classList.remove(className);
  });

  let indexClassToElement = qtyUserCorrectAnswers - 1;
  let classToElement = classes[indexClassToElement];

  qtyAnswersCorrectScore.classList.add(classToElement);
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

form.addEventListener('submit', event => {
  event.preventDefault();

  // Limpando pontuação
  cleanScores();

  // obtém as respostas do usuário
  const userAnswers = GetUserAnswers();

  // calcula a pontuação do usuário
  calculateUserScore(userAnswers);

  // muda a cor da quantidade de respostas certas
  toggleColorQtyCorrectAnswer()

  // exibe a pontuação final
  showFinalScore();

  // Inicia a animação da pontuação final
  StartAnimationResult();
});