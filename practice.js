// use of if and else with AND  oprater
let a = prompt("enter the age: ")
a=Number.parseInt(a)
if(a>=10 && a<=20){
    console.log("your age is between 10 and 20")
}
else{
    console.log("your age is not between 10 and 20" )
}


// use of switch in javascript
switch(a){
    case 12:
        console.log("yore age is 12") 
        break
    case 13:
        console.log("yore age is 13")
        break
    case 14:
        console.log("yore age is 14") 
        break
    case 15:
        console.log("yore age is 15") 
        break
    case 16:
        console.log("yore age is 16") 
    }

// program to if the number is divisible by 2 and 3 or not 
let b = prompt("enter the number: ")
b=Number.parseInt(b)

if(b%2==0 && b%3==0){
    console.log(b,"is divisible by 2 and 3")
}
else if(b%2==0){
    console.log(b,"is divisible by only 2")
}
else if(b%3==0){
    console.log(b,"is dividible by only 3")
}
else{
    console.log(b,"is not divisible by nither 2 nor 3")
}


// use of the ternary operater
let c= prompt("enter your age: ")>18?"you can drive ":"you can not drive";

console.log(c)
