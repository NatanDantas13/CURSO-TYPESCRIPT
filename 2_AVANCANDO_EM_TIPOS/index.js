"use strict";
// 1 - arrays
let numbers = [1, 5, 2];
console.log(numbers);
numbers.push(1);
console.log(numbers[3]);
// lista array
let stringArray = [];
stringArray.push("Natan");
console.log(stringArray);
// 2 - OUTRA SINTAXE ARRAY
const nums = [10, 20, 40];
nums.push(1, 2, 5, 6);
console.log(nums);
// UTILIZANDO STRING
const string = [];
string.push("Natan", "João");
console.log(string);
// 3 - Tipo Any 
const tipoAny = [{}, "Teste", 10.9, true, false, ["Ele deixa disponível"]];
console.log(tipoAny);
// 4 - PARAMETROS TIPADOS
function soma(a, b) {
    console.log(a + b);
}
soma(10, 20);
// 5 - RETORNO DE FUNCTION
function somaWithTypeReturn(oneNumber, twoNumber) {
    return oneNumber + twoNumber;
}
console.log(somaWithTypeReturn(5, 10));
function returnStringConcact(name, lastName) {
    return `Meu primero nome é ${name} e meu sobrenome é ${lastName}`;
}
console.log(returnStringConcact("Natan", "Ramalho"));
function createCar(nameCar, ano) {
    const listCar = [];
    const carGenerated = generateCar(nameCar, ano);
    listCar.push(carGenerated);
    function generateCar(nomeCar, ano) {
        const car = { nomeCar, ano };
        return car;
    }
    return listCar;
}
console.log(createCar("Corsa", 2010));
console.log(createCar("Gol", 2014));
