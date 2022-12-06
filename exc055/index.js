const getTodos = url => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
    }

    if (isRequestNotOk) {
      reject('Requisição mal sucedida.')
    }
  })

  request.open('GET', url)
  request.send()
})

getTodos("https://pokeapi.co/api/v2/pokemon/1")
  .then(data => console.log(data.name))
  .catch(error => console.log(error))


const people = [
  {name: 'Eduardo', age: 19},
  {name: 'Vitória', age: 24},
  {name: 'Conceição', age: 13},
  {name: 'Chalme', age: 47},
]

const getPerson = personName => new Promise((resolve, reject) => {
  people.forEach((person) => {
    if (person.name === personName) {
      resolve(person)
    }
  })

  reject('Usuário não encontrado')
})

getPerson('Eduardo')
  .then(data => console.log(data))
  .catch(error => console.log(error))

getPerson('yasmim')
  .then(data => console.log(data))
  .catch(error => console.log(error))