const form = document.querySelector('form')
const result = document.querySelector('.result')

const gettingDateOfInput = () => {
  const inputDay = form.day.value;
  const inputMonth = form.month.value;
  const inputYear = form.year.value;

  if (inputDay !== '' && inputMonth !== '' && inputYear !== '') {
    const dateToInput = `${inputMonth}/${inputDay}/${inputYear}`;
    const dateOfInput = new Date(`${dateToInput} 00:00:00`);

    return dateOfInput;
  }

  return 'error'
}

const handleDifferenceDate = differenc => {
  if (differenc < 0) {
    return 'error'
  }

  const seconds = Math.floor(differenc / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const years = Math.floor(days / 365)

  return [seconds, minutes, hours, days, years]
}

const checkedDate = (date, nameDate, msgNoPast) => {
  if (date === 1) {
    let nameDateUnique = nameDate.replace('s', '')
    return `<strong>${date} ${nameDateUnique}</strong>`
  }

  if (date > 1) {
    return `<strong>${date} ${nameDate}</strong>`
  }

  return `Não se passou <strong>${msgNoPast}</strong>`
}

const showResult = (differenceInDates) => {
  result.style = "display: flex;"

  const seconds = differenceInDates[0]
  const minutes = differenceInDates[1]
  const hours = differenceInDates[2]
  const days = differenceInDates[3]
  const years = differenceInDates[4]

  const hoursChecked = checkedDate(hours, 'Horas', 'nenhuma hora')
  const daysChecked = checkedDate(days, 'Dias', 'nenhum dia')
  const yearsChecked = checkedDate(years, 'Anos', 'nenhum ano')

  const templateResult = `
    <h2 class="itens-result">Se passaram aproximadamente:</h2>
    <li class="itens-result"><strong>${seconds} Segundos</strong></li>
    <li class="itens-result"><strong>${minutes} Minutos</strong></li>
    <li class="itens-result">${hoursChecked}</strong></li>
    <li class="itens-result">${daysChecked}</li>
    <li class="itens-result">${yearsChecked}</li>
  `

  result.innerHTML += templateResult
}

const showFeedbackError = msg => {
  result.style = "display: flex;"

  const templateError = `
    <h3 class="error">${msg}</h3>
  `

  result.innerHTML = templateError
}

const removeItens = () => {
  const itensResult = document.querySelectorAll('.itens-result')
  if (itensResult) { itensResult.forEach(item => item.remove()) }

  const error = document.querySelector('.error')
  if (error) { error.remove() }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const presentDate = new Date();

  //Removendo itens caso já existentes
  removeItens()

  //Pegando data passada nos inputs
  const dateOfInput = gettingDateOfInput()

  //pegando a diferença entre as datas
  let differenceInDates = null

  if (dateOfInput === 'error') {
    showFeedbackError("Preencha os campos")
  }
  else {
    const differenc = presentDate.getTime() - dateOfInput.getTime()
    differenceInDates = handleDifferenceDate(differenc)
  }

  //Mostrando o resultado
  if (differenceInDates === 'error') {
    showFeedbackError("Por favor, preencha os campos com datas passadas.")
  }
  else if (dateOfInput !== 'error' && differenceInDates !== 'error') {
    showResult(differenceInDates)
  }
})