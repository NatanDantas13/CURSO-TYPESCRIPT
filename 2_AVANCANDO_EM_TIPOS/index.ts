// 1 - arrays, como definir tipos de lista

let numbers: number[] = [1, 5, 2]

console.log(numbers)

numbers.push(1)

console.log(numbers[3])

// lista array

let stringArray: string[] = []

stringArray.push("Natan")

console.log(stringArray)


//====================!!!==============

// 2 - OUTRA SINTAXE ARRAY

const nums: Array<number> = [10, 20, 40]

nums.push(1, 2, 5, 6)

console.log(nums)

// UTILIZANDO STRING

const string: Array<string> = []

string.push("Natan", "João")

console.log(string)

// 3 - Tipo Any 

const tipoAny: any = [{}, "Teste", 10.9, true, false, ["Ele deixa disponível"]]

console.log(tipoAny)


//====================!!!==============

// 4 - PARAMETROS TIPADOS

function soma(a: number, b: number){
  console.log(a + b)
}

soma(10, 20)



//====================!!!==============

// 5 - RETORNO DE FUNCTION

function somaWithTypeReturn(oneNumber: number, twoNumber: number): number {
  return oneNumber + twoNumber
}

console.log(somaWithTypeReturn(5, 10))

function returnStringConcact(name: string, lastName: string): string{
  return `Meu primero nome é ${name} e meu sobrenome é ${lastName}`
}

console.log(returnStringConcact("Natan", "Ramalho"))

function createCar(nameCar: string, ano: number ): Object[] {
  const listCar: Object[] = []

  const carGenerated = generateCar(nameCar, ano)
  listCar.push(carGenerated)

  function generateCar(nomeCar: string, ano: number): Object{
    const car = {nomeCar, ano}
    return car
  }

  return listCar
}

console.log(createCar("Corsa", 2010))
console.log(createCar("Gol", 2014))


//====================!!!==============


// 6 - FUNCAO ANONIMA

setTimeout(function(){
  console.log("Isso é uma função anonima, function sem name, definida por setTimeOut a cada 2 segundos")
}, 2000)


//====================!!!==============


// 7 - TIPOS DE OBJECT

function cordenadas(cord : {x: number, y: number}){
  console.log("Imprimindo cordernada x", cord.x)
  console.log("Imprimindo cordernada y", cord.y)

}

const objectCord = {
  x: 100,
  y: 18.2
}

cordenadas(objectCord)


//====================!!!==============

// 8 - PROPIEDADES OPCIONAIS


// >> DICA: para definir uma prop como opcioanal basta adicionar ? a frente da propriedade.


function showNumber(a: number, b: number, c?: number){
  console.log("A:", a)
  console.log("B:", b)
  console.log("C:", c)
}

showNumber(1, 2)
showNumber(1, 2, 3)


//====================!!!==============

// 9 - Validação de props opcionais.

// >> DICA: Utilizar diferencial com undefined, dessa forma conseguimos identificar se for undefined, ele não a impressão

// !! Resumo: caso não tenha sobrenome, ele imprimi apenas o ultimo return, caso tenha sobrenome, ele imprime o primeiro console.log

function conversa(primeiroNome: string, sobrenome?: string){
  
  if(sobrenome !== undefined){
    return `Olá ${primeiroNome} ${sobrenome}, tudo bem contigo?`
  }

  return `Olá ${primeiroNome} tudo certo?`

}

console.log(conversa("Natan", "Ramalho"))
console.log(conversa("João"))



//====================!!!==============


// 10 - Union Types

// >> DICA: Utilizar pipe para adicionar um type

// !! RESUMO: Serve para deixar mais flexivel mais controlando não deixando 100% livre como any

function balance(balance: number | string | boolean){
  console.log(balance)
}

balance(100)
balance("100")
balance(true)

//====================!!!==============

// 11 - Union Types

// >> DICA:

// !! RESUMO: Validação com typeOf utilizando tipagem com Union Types

function showUserPermission(perm: boolean | string){
  if(typeof perm === "boolean"){
    return `Usuário não autorizado!`
  }

  return `A permissão do usuário é ${perm}`
}

console.log(showUserPermission(false))
console.log(showUserPermission("admin"))


//====================!!!==============


// 12 - Type Alias

// >> DICA:

// !! RESUMO : Type alias eu consigo simplificar a sintaxe unionType, minimizando o tamanho.
// Sem a necessidade de adicionar union type no parametro da função
// declaração type alias consigo definir type ID, e usar esse parametro como um tipo.


type ID = string | number 

function showId(id: ID){
  console.log(`O id é ${id}`)
}

showId(100)
showId("100")



