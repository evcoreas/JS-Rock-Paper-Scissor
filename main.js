
var computerChoice = Math.floor((Math.random() * 3 + 1));
  if(computerChoice == 1){
    computerChoice = "rock";
  }
  else if(computerChoice == 2){
    computerChoice = "paper";
  }
  else{
    computerChoice = "scissors";
  }
//this is what the computer chose
console.log(computerChoice)


var playersChoice

 document.getElementById("rock").addEventListener("click", function(event){
  playersChoice = "rock";
  seeWinner(playersChoice,computerChoice)
  })
   document.getElementById("paper").addEventListener("click", function(event){
  playersChoice = "paper";
  seeWinner(playersChoice,computerChoice)
 })
  document.getElementById("scissors").addEventListener("click", function(event){
  playersChoice = "scissors";
  seeWinner(playersChoice,computerChoice)
 })



// console.log(playersChoice)
 function seeWinner(user, computer){
  if(user === computer) {
    alert("It's a tie! Try again. ")
  }

  else if(user === "rock" && computer ==="scissors"){
  alert ("The computer chose scissors, you chose rock. You win!");
  }

  else if (user =="rock" && computer=="paper") {
           alert(" The computer chose paper, you chose rock. You lose!");
       }

       // condition 2 
   
   if(user ==="paper" && computer ==="rock") {
           alert("The computer chose rock, you chose paper. You win!");
       }

       else if (user=="paper" && computer=="scissors") {
           alert("The computer chose scissors, you chose paper. You lose!");
       }
       // condition 3 

   if(user === "scissors" && computer ==="rock") {
           alert("The computer chose rock, you chose scissors. You lose!");
       }

       else if(user=="scissors" && computer =="paper") {
           alert("The computer chose paper, you chose scissors. You win!");
       }
    }

// seeWinner(playersChoice,computerChoice);