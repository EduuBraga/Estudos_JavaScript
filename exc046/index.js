const past = new Date("11/23/2020 20:24:00")
const dateCurrent = new Date()

console.log(past)
const difference = dateCurrent.getTime() - past.getTime()

const seconds = Math.round(difference / 1000)
console.log(seconds)

const minutes = Math.round(seconds / 60)
console.log(minutes)

const hours = Math.round(minutes / 60)
console.log(hours)

const days = Math.round(hours / 24)
console.log(days)
