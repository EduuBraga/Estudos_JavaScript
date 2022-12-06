const list = document.querySelector('.list')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response)
    return response.json()
  })
  .then(users => {
    console.log(users)
    users.forEach(user => {
      list.innerHTML += `
        <li><strong>Nome:</strong> ${user.name}</li>  
        <li><strong>Username:</strong> ${user.username}</li>
        <br>
      `
    });
  })
  .catch(error => console.log(error))
