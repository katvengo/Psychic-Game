var choices = ['a','b','c','d', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
 
var winner = 0;
var losses = 0;
var guessesLeft = 9;
var soFar = [];


 var wins = document.getElementById("win");
 var loss = document.getElementById('losses');
 var guessesSoFar = document.getElementById('sofar');
 var guessesLeftToUse = document.getElementById('left');

 function reset () {
  guessesLeftToUse.textContent = 9;
  soFar = [];
   }

  function userGuesses() {
    // for (i = 0; i < soFar.length; i++) {
    //   GuessesSoFar.textContent = soFar[i];
      
    // }
    console.log(soFar)
    guessesSoFar.innerHTML = soFar;
  }

document.onkeyup = function(event) {
  var userKey = event.key;
  console.log (userKey);
  var computerLetter = choices[Math.floor(Math.random() * choices.length)];
 

   if (userKey === computerLetter){
     wins.textContent ++;
     console.log('you won!');
       if (parseInt(guessesLeftToUse.textContent) === 0)  {
         reset()
       }
   } 
    
   if(userKey !== computerLetter) {
    guessesSoFar.textContent = event.key;
    console.log('you lost!');
    guessesLeftToUse.textContent --;
    soFar.push(guessesSoFar.textContent);
    userGuesses()
    if (parseInt(guessesLeftToUse.textContent) === 0) {
      loss.textContent ++;
      reset()
      
    }
   }
  }