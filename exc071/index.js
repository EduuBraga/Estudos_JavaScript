class Mammal{
  constructor(specie, name, age){
    this.specie = specie
    this.name = name
    this.age = age
    this.mammaryGland = true
  }
}

class MammalDangerous extends Mammal{
  // constructor(specie, name, age, manEater){
  //   super(specie, name, age)
  //   this.manEater = manEater
  // }
}

const zeca = new Mammal('zebra', 'zeca', 6)
const raul = new Mammal('cat', 'raul', 3)
const mufasa = new MammalDangerous('lion', 'mufasa', 5)
// const mufasa = new MammalDangerous('lion', 'mufasa', 5, false)

console.log(raul, zeca, mufasa)
