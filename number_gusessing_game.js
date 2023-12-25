let rando=(min,max)=>{
    let num=Math.random()
    let range=max-min+1
    let num2=Math.round(range*num)
    let correct_num=num2+min
    
    return correct_num
    
}
let x = prompt("Enter the min Number : ")
x = Number.parseInt(x)
let y = prompt("Enter the max Number : ")
y = Number.parseInt(y)
let num=rando(x,y)
// console.log(num)  //u can check what the random number is if you uncomment this
let range=y-x+1

let guessed_num =null
let score = range


while(guessed_num !="exit"){
guessed_num =  prompt("enter your Number or done if you want to exit: ")
if(guessed_num != "exit"){   
guessed_num=Number.parseInt(guessed_num)
    
    if(guessed_num > num){
        console.log("your guessed number is grater")
        score = score-1
    }
    else if(guessed_num < num){
        console.log("your guessed number is less")
        score = score-1
    }
    else if(gussed_num=num){
    console.log("your guessed number is correct and your score is :",score)
    break
    }
}
    
}
