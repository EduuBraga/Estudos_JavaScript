//InnerHTML
let person = ['eduardo', 'vivi', 'conceição', 'chalme', 'yasmim']

let div = document.querySelector('.content')

person.forEach( (person, index) => {
  div.innerHTML += `<p>Pessoal de número ${index + 1}, codenome: ${person}</p>`
})


//innerText
let paragraph = document.querySelector('p')

paragraph.innerText = 'Olá, mundo!'

//getAttribute e setAttribute

const link = document.querySelector('a')

// console.log(link.getAttribute('href'))

link.innerText = 'Controle de finanças'

link.setAttribute('href', 'https://controlefinanceiro-five.vercel.app/')

link.setAttribute('style', 'text-decoration-color: #bdbdbd; color: black;')

// console.log(link)



// Modificando CSS - inline

let cssInline = document.querySelector('#cssInline')

cssInline.setAttribute('style', 'color: blue;')

cssInline.setAttribute('style', 'margin: 50px;')


cssInline.style.color = 'blue'
cssInline.style.margin = ''
cssInline.style.fontSize = '40px'