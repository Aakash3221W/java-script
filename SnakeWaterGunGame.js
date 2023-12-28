let comp=null;
let player= null;
let player_score=0;
let comp_score=0;

while(player!="end"){
player=prompt("enter your choice snake, water or gun.\nTo end the game type end:")
player=player.toLowerCase()
let arr=["snake","water","gun"]
comp=arr[Math.floor(Math.random()*arr.length)]

if(player!="snake" && player !="water" && player != "gun" && player!= "end"){
    console.log("please enter a valid value only")
}

else if(player=="gun" && comp=="snake"){
    console.log("you earned a point")
    player_score++
}
else if(player=="water" && comp=="gun"){
    console.log("you earned a point")
    player_score++
}
else if(player=="snake" && comp=="water"){
    console.log("you earned a point")
    player_score++
}
else if(player=="end"){
    break
}

else {
    console.log("NO Computer earned a point")
    comp_score++
}

}
console.log("Player Score: " + player_score);
console.log("Computer Score: " + comp_score);
