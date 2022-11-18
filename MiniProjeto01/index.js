let correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('form');
const containerResult = document.querySelector('.container__result');
const resultQuiz = document.querySelector('.result__quiz');

form.addEventListener('submit', event => {
  event.preventDefault();

  let score = 0;
  let counter = 0;
  
  let answersInput = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  correctAnswers.forEach((answers, index) => {
    if (answers === answersInput[index]) {
      score += 25;
    }
  });

  window.scrollTo(0, 0);

  containerResult.classList.remove('d-none');

  const timer = setInterval(() => {
    if(counter === score){
      clearInterval(timer)
    }

    resultQuiz.textContent = `${counter}%`
    counter++
  }, 40);

});

