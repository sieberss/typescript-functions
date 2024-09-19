
const numbers:number[] = [1,2,3,4,5,6,7,8,9]
console.log(numbers.map(num=>num*2))
console.log(sum(numbers)) //sum 45

const lambdaSum = (numbers:number[]):number => numbers.reduce((a,b)=>a+b)
console.log(lambdaSum(numbers))

const words:string[] = ["apfel", "birne", "banane", "pflaume", "zitrone"]
console.log(words)
const longerThan5 = (words:string[]):string[] => words.filter(w=> w.length>5)
console.log(words.filter(w=> w.length>5))
console.log(longerThan5(words))
console.log(numbers.some(a=>a>10)) //false
console.log(numbers.some(a=>a>8))  //true

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
const sorted = list.sort((a,b)=> a-b)
const squared = sorted.map(n=>n*n)
console.log(squared)
const shorted = squared.slice(2, length-4)
console.log(shorted)
const notDivisibleBy4 = shorted.filter(n => n%4 !== 0)
console.log(notDivisibleBy4)
console.log(sum(notDivisibleBy4))

function sum(numbers:number[]):number{
    return numbers.reduce( (a,b)=>a+b)
}



