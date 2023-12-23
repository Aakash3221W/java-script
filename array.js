//adding the numbers to an arrey by taking input from the user 

let a=[]
let n=null
while(n!="done"){
n=prompt("enter the number and to exit type done : ")
if(n != "done" && n!= null && n!=undefined ){
n= Number.parseInt(n)
a.push(n)}
}
console.log(a)

//filtering the number from an arrey divisible by ten and then making the new arrey with the arr which is a3 which hold the square of numbers in arr

let arr= [66,70,6,20,60,40]
let a2= arr.filter((value)=>{
    return value%10===0
})

console.log(a2)

let a3= arr.map((n)=>{
    return n*n
})
console.log(a3)

//using reduce to calculte the product of all numbers in the array

let x=[6,5,67,45,34,65,32,56]

n= x.reduce((v1,v2)=>{
    return v1*v2
})

console.log(n)
