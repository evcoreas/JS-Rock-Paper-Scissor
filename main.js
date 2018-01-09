// eventlistener
// var titleText = document.getElementById("title");

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
// console.log(computerChoice)



 var playersChoice 

 document.getElementById("rock").addEventListener("click", function(event){
 	playersChoice = "rock";
 	console.log(playersChoice)
 	seeWinner(playersChoice,computerChoice)
 	})
 	 document.getElementById("paper").addEventListener("click", function(event){
 	playersChoice = "paper";
 	console.log(playersChoice)
 	seeWinner(playersChoice,computerChoice)
 })
  document.getElementById("scissors").addEventListener("click", function(event){
 	playersChoice = "scissors";
 	console.log(playersChoice)
 	seeWinner(playersChoice,computerChoice)
 })



// console.log(playersChoice)
 function seeWinner(person, computer){
 	if(person === computer){
 		alert("It's a tie")
 	}
 	if(person === "rock"){
       if(computer ==="scissors"){
           alert ("rock wins");
       }
       else{
           alert("paper wins");
       }
   }
   if(person ==="paper")
       if(computer ==="rock"){
           alert("paper wins");
       }
       else{
           alert("scissors wins");
       }
   if(person === "scissors"){
       if(ccomputer ==="rock"){
           alert("rock wins");
       }
       else{
           alert("scissors wins");
       }
   }
};
seeWinner(playersChoice,computerChoice);
 