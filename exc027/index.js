const button = document.querySelector('.button')
const list = document.querySelector('.list')

list.addEventListener('click', event => {
  const clickedElement = event.target

  if(clickedElement.tagName === 'LI'){
    clickedElement.remove()
  }
})

button.addEventListener('click', ()=>{
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  li.classList.add('item_list')
  list.append(li)
})