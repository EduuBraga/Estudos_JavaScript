const present = new Date()

console.log(present)

//Data
console.log('getFulYear:', present.getFullYear())
console.log('getMonth:', present.getMonth())
console.log('getDate:', present.getDate())
console.log('getDay:', present.getDay())

//Horário
console.log('getHours:', present.getHours())
console.log('getMinutes:', present.getMinutes())
console.log('getSeconds:', present.getSeconds())

//timeStamp
console.log('timestmap:', present.getTime())

//data em forma de string
console.log('toDateString:', present.toDateString())
console.log('toLocaleDateString:', present.toLocaleDateString())
console.log('toLocaleString:', present.toLocaleString())
console.log('toTimeString:', present.toTimeString())
console.log('toLocaleTimeString:', present.toLocaleTimeString())


