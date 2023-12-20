let word = "aakash"

//use of includes,startsWith and endsWith fuction 
let sentence ="aakash loves playing valorant."
 
const a= sentence.includes(word)?"is":"is not"
const b= sentence.startsWith(word)?"is":"is not"
const c= sentence.endsWith(word)?"is":"is not"
console.log("the word \"",word,"\"",a,"in the sentence")
console.log("the word \"",word,"\"",b,"in the start of the sentence")
console.log("the word \"",word,"\"",c,"in the end of the sentence")

//changeing a string to upper and lower case
console.log(word.toLowerCase())
console.log(word.toUpperCase())


//extracting the amount from the string 

let str1="the price of the coffee is Rs 100"
let str2= Number.parseInt(str1.slice("the price of the coffee is Rs ".length))

console.log(str2)

console.log(typeof str2)

//can we change the 4th character of a string?
 
 word[3]="j"
 
 console.log(word)//no we cannot change the exixting sting because string are immutable but we can create a new string in which the fouth character will be "J" that string can be aakJsh.but it will nor change the string word.
