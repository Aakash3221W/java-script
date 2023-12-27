//taking input from the user and telling him if he or she can drive

let age = null;

let again = true;
while(again){



age = prompt("How old are you?");
age = parseInt(age);

if(age>=18){
  alert("you can drive")
}
else if(age<0){
  console.error("you entered a negative age")
  break;
}
else{
  alert("you can't drive")
}
  again = confirm("Do you want to enter the age again?")
}

// take a color of the choice of user and changing the background of the page on the bases of it


let color = prompt("Enter the page background color: ");
document.body.style.background =color
