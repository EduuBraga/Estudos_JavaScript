const itemsList = document.querySelectorAll('.item_list')

itemsList.forEach(item=>{
  item.addEventListener('click', event=>{
    let itemClicked = event.target

    itemClicked.remove()
  })
})

const button = document.querySelector('.button')
const list = document.querySelector('.list')


button.addEventListener('click', ()=>{
  // list.innerHTML += `<li class="item_list">Comprar arroz</li>`

  const li = document.createElement('li')

  li.textContent = 'Novo item'
  li.classList.add('item_list')
  list.append(li)
  console.log(li)
})

