const getPokemon = async () => {
  const bulbasaur = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = await fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = await fetch('https://pokeapi.co/api/v2/pokemon/7')

  const result = await Promise.all([bulbasaur, charmander, squirtle])
  result.forEach(async response => console.log(await response.json()))
}

getPokemon()