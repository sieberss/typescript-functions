
const numbers:number[] = [1,2,3,4,5,6,7,8,9]
console.log(numbers.map(num=>num*2))
console.log(numbers.reduce( (a,b)=>a+b)) //sum 45
const words:string[] = ["apfel", "birne", "banane", "pflaume", "zitrone"]
console.log(words.filter(w=> w.length>5))
console.log(numbers.some(a=>a>10)) //false
console.log(numbers.some(a=>a>8))  //true