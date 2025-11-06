// 1 - number
let x: number = 10

x = 15

console.log(typeof x)
console.log(x)

const y: number = 10.3333

console.log(y.toPrecision(3))

// 2- STRING

const fistName: string = "Natan";

console.log(fistName.toUpperCase()) /// FORMATA A STRING EM CAIXA ALTA

const lastname: string = "Ramalho";

let fullName: string

fullName = fistName + " " +  lastname

console.log(fullName)

console.log("O tipo de full name é", typeof(fullName))
