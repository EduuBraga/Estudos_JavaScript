const watch = document.querySelector('.watch')

const handleTimeCurrent = () => {
  const dateCurrent = new Date()
  const hours = dateCurrent.getHours()
  const minutes = dateCurrent.getMinutes()
  const seconds = dateCurrent.getSeconds()
  
  const templateHTML = `
    <span>${hours < 10 ? `0${hours}` : hours}</span> :
    <span>${minutes < 10 ? `0${minutes}` : minutes}</span> :
    <span>${seconds < 10 ? `0${seconds}` : seconds}</span>
  `

  watch.innerHTML = templateHTML
}

setInterval(handleTimeCurrent, 1000)