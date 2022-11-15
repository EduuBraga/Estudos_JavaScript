//Event copy
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', ()=>{
  alert('Texto copiado')
})

//Event mouseMove

const box = document.querySelector('.box')

box.addEventListener('mousemove', event => {
  let positionX = event.offsetX
  let positionY = event.offsetY

  box.textContent = `X: ${positionX} | Y: ${positionY}`

  if(positionX >= 100){
    box.style = 'background: #666'
  } else box.style = 'background: #eee'

  if(positionY >= 100){
    box.style = 'background: #00ffbd'
  }
})

document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY)
})