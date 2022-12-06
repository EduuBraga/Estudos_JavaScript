const list = document.querySelector('.list')

// const getUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users = await response.json()

//   users.forEach(user => {
//     list.innerHTML += `
//       <li><strong>Nome:</strong> ${user.name}</li>  
//       <li><strong>Username:</strong> ${user.username}</li>
//       <br>
//     `
//   });
// }

// getUsers()






const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return await response.json()
}

const templateHTMLlist = async () => {
  const users = await getUsers()

  users.forEach(user => {
    list.innerHTML += `
      <li><strong>Nome:</strong> ${user.name}</li>  
      <li><strong>Username:</strong> ${user.username}</li>
      <br>
    `
  });
}

templateHTMLlist()




// USANDO O FETCH

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     console.log(response)
//     return response.json()
//   })
//   .then(users => console.log(users))
//   .catch(error => console.log(error))
