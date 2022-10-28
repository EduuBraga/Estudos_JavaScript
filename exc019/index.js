let paragraph = document.querySelector('.error')

console.log(paragraph)

let h1 = document.querySelector("body > h1")

console.log(h1)

let paragraphs = document.querySelectorAll('p')

console.log(paragraphs[0])

paragraphs.forEach(paragraph => {
  console.log(paragraph)
})


let title = document.getElementById('title')

console.log(title)


let errors = document.getElementsByClassName('error')

console.log(errors)


let paragraphsTags = document.getElementsByTagName('p')

console.log(paragraphsTags)