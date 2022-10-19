// Strings
let email = 'eduardo.braga467@gmail.com'

console.log(email.length)
console.log(email.indexOf('@'))

let firstName = 'eduardo'
let secondName = 'braga'
let fullName = firstName + ' ' + secondName

console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

// Métodos de string

let email2 = 'zelda@link.com'

let emailLastIndexOF = email2.lastIndexOf('o')
let emailSlice = email2.slice(0, email2.indexOf('@'))
let emailReplace = email2.replace('zelda', 'link')

console.log(emailReplace)