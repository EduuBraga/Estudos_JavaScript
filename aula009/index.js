const isUserloggedin = false

if(!isUserloggedin){
  console.log('Você deve fazer login para acessar')
}

let idadePessoa = 19
let Alimento = true

if(idadePessoa <= 22 && Alimento === false){
	console.log('traga um alimento')
}else if(idadePessoa >= 22 || Alimento === true){
	console.log('pode entrar!')
}

//Break e continue
const scores = [25, 50, 0, 90, 100, 45, 65]

for(let i = 0; i < scores.length; i++){
  if(scores[i] === 0){
    continue
  }
  
  console.log(`Sua pontuação: ${scores[i]}`)

  if(scores[i] === 100){
    console.log("Parabéns, você atingiu a pontuação máxima")
    
    break
  }
}


//Switch

const nota = "D"

switch(nota){
  case 'A':
    console.log('Você tirou nota A')
    break
  case 'B':
    console.log('Você tirou nota B')
    break
  case 'C':
    console.log('Você tirou nota C')
    break
  case 'D':
    console.log('Você tirou nota D')
    break
  case 'E':
    console.log('Você tirou nota E')
    break
  default: 
    console.log('Nota inválida')
}

const select = document.querySelector('#select')
const result = document.querySelector("#resultado")
const btn = document.querySelector("#btn")

function handleClick(){
  let optionValeu = select.options[select.selectedIndex].value

  switch(optionValeu){
    case 'macarrao':
      result.textContent = 'Mararrão da câncer'
      break
    case 'feijoada':
      result.textContent = 'Escolha certa, nós temos a melhor feijoada da região'
      break
    case 'baiao':
      result.textContent = 'Baiãozinho saindo no capricho'
      break
    default: 
      result.textContent = 'Nenhum item selecionado'
  }
  console.log(optionValeu)
}

btn.addEventListener('click', handleClick)





var nota1 = 7.0
var nota2 = 7.0
var media = (nota1 + nota2) / 2
var conceito = ""

if (media >= 8) {
	conceito = "Ótimo"
} else if(media >= 6.5){
	conceito = "Boa"
} else{
	conceito = "Regular"
}

switch(conceito){
	case "Ótimo":
		console.log("Parebéns, sua nota foi Ótima!")
	  break
	case "Boa":
		console.log("Você está indo bem, mais precisa estudar um pouco mais.")
	  break
	case "Regular":
		console.log("Você precisa estudar mais.")
	  break
	default:
		console.log("Infelizmente houve algum erro.")
	  break
}


switch(media){
  case 7:
    console.log('nota boa')
}