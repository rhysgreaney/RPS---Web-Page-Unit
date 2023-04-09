 /* I found this coding through https://dev.to/asaoluelijah/text-to-speech-in-3-lines-of-javascript-b8h */

 function say(myMessage){
    var msg = new SpeechSynthesisUtterance(myMessage);
    window.speechSynthesis.speak(msg);
  }

 /* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choose win,lose, or tie vs ROCK? */
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
    }
    if (user === 'paper') {
        result = "win";
    }
    if (user === 'scissors') {
        result = "lose";
    }
    var theMessage = "Computer chose rock, you " + result + "!"
    alert(theMessage);
    say(theMessage);
}

/* When going through my coding I noticed the only issue I had
was indenting, that is why my program wasn't running, working product */