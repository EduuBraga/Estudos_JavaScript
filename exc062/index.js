try { 
  console.log(oi) 
} catch({message, name}) {
  if(message === 'oi is not defined' && name === 'ReferenceError'){
    const oi = 'novo oi'
    console.log(oi)
  }
}

console.log('oi')