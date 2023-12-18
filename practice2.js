let marks={
  herry:70,
  aakash:90,
  farhan:66
}
//printing the marks with name of student with plain for loop
for(let i=0;i<Object.keys(marks).length;i++){
  console.log("marks of",Object.keys(marks)[i],"is",marks[Object.keys(marks)[i]])
}
//with the help of for in loop
for(let key in marks){
  console.log("marks of",key,"is",marks[key])
}
// use of while loop to force the user to enter the correct number
const Cn=87
let i

while(i!=Cn){
  i=prompt("enter the number")
  if(i!=Cn){
  console.log("try again")
  }
  else{
      console.log("you have enterd the correct number")
  }
      
}

//function to find mean of five numbers

const mean=(a,b,c,d,e)=>{
    return(a+b+c+d+e)/5
}

console.log("mean of 1 ,2 ,3 ,4 ,5 is:",mean(1,2,3,4,5))
