const button = document.querySelector('button')
const wrapperPopup = document.querySelector('.wrapper-popup')

button.addEventListener('click', () => {
  wrapperPopup.style = 'display: flex;'
})

wrapperPopup.addEventListener('click', event => {
  const classNameAndClickedElement = event.target.className
  const classNames = ['wrapper-popup', 'close-popup', 'popup-link']
  const closePopup = classNames.some(className => className === classNameAndClickedElement)

  if (closePopup) {
    wrapperPopup.style = 'display: none;'
  }
})
