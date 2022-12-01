const form = document.querySelector('form')
const result = document.querySelector('.result')

const gettingDateOfInput = () => {
  const inputDay = form.day.value;
  const inputMonth = form.month.value;
  const inputYear = form.year.value;

  const dateToInput = `${inputMonth}/${inputDay}/${inputYear}`;
  const dateOfInput = new Date(`${dateToInput} 00:00:00`);

  return dateOfInput;
}

const handleDifferenceDate = differenc => {
  const seconds = Math.round(differenc / 1000)
  const minutes = Math.round(seconds / 60)
  const hours = Math.round(minutes / 60)
  const days = Math.round(hours / 24)
  const years = Math.round(days / 365)

  return [seconds, minutes, hours, days, years]
}

const checkedDate = (date, nameDate, msgNoPast) => {
  if (date === 1) {
    let nameDateUnique = nameDate.replace('s', '')
    return `Exatamente <strong>${date} ${nameDateUnique}</strong>`
  } 
  
  if (date > 1) {
    return `Exatamente <strong>${date} ${nameDate}</strong>`
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
    <li class="itens-result">Exatamente <strong>${seconds} Segundos</strong></li>
    <li class="itens-result">Exatamente <strong>${minutes} Minutos</strong></li>
    <li class="itens-result">${hoursChecked}</strong></li>
    <li class="itens-result">${daysChecked}</li>
    <li class="itens-result">${yearsChecked}</li>
  `

  result.innerHTML += templateResult
}

const removeItens = () => {
  const itensResult = document.querySelectorAll('.itens-result')

  if (itensResult) {
    itensResult.forEach(item => item.remove())
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const dateCurrent = new Date();

  removeItens()

  const dateOfInput = gettingDateOfInput()

  const differenc = dateCurrent.getTime() - dateOfInput.getTime()

  const differenceInDates = handleDifferenceDate(differenc)

  showResult(differenceInDates)
})