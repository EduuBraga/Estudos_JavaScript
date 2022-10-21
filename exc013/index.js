//Callback 

const sayNumber = callback => {
  const randomNumber = 56

  callback(randomNumber)
}

sayNumber(number => {
  console.log(number)
})


// ForEach

const socialNetworks = ['linkedin', 'instagram', 'youtube', 'facebook']

let number = 0

socialNetworks.forEach(()=>{
  console.log(number++)
})

socialNetworks.forEach((socialNetwork, index, array)=>{
  console.log(socialNetwork, index, array)
})

const list = document.querySelector('#list')

let listTemplateHTML = ''

socialNetworks.forEach(socialNetwork => {
  listTemplateHTML += `<li>${socialNetwork}</li>`
})

list.innerHTML = listTemplateHTML