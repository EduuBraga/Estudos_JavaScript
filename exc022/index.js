// let paragraph = document.querySelector('p')

// paragraph.classList.add('error')
// paragraph.classList.remove('error')
// paragraph.classList.add('success')

let paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
  let success = 'success'
  let error = 'error'

  let paragraphText = paragraph.innerText

  if(paragraphText.includes(success)){
    paragraph.classList.add(success)
  }
  if(paragraphText.includes(error)){
    paragraph.classList.add(error)
  }
})


let title = document.querySelector('.title')

title.classList.toggle('test')
title.classList.toggle('test')