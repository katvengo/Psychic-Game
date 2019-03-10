var choices = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 
var winner = 0;
var losses = 0;
var guessesLeft = 9;
var soFar = "";


 var wins = document.getElementById("win");
 var loss = document.getElementById('losses');
 var guessesSoFar = document.getElementById('sofar');
 var guessesLeftToUse = document.getElementById('left');

document.onkeyup = function(event) {
  var userKey = event.key;
  console.log (userKey);
  var computerLetter = choices[Math.floor(Math.random() * choices.length)];
 

   if (userKey === computerLetter){
     wins.textContent ++;
     console.log('you won!');
     guessesLeftToUse.textContent = 9; //need to figure out how to reset back to 9
   } 
    
   if(userKey !== computerLetter) {
    guessesSoFar.textContent = event.key;
    console.log('you lost!');
    guessesLeftToUse.textContent --; //I can't always do this if GuessesLeftUse equals 0
   }

   
  if (guessesLeftToUse === 0) {
  loss.textContent ++;
  guessesLeftToUse.textContent = 9; //need to figure out how to reset back to 9

   }  

  }
