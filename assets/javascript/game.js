// Create an array that lists out all of the options
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses= 0;
var guesses = 0;

document.getElementById("wins").innerHTML ="<h3>Wins:</h3>" + wins;
document.getElementById("losses").innerHTML ="<h3>losses:</h3>" + losses;
document.getElementById("guesses").innerHTML ="<h3>guesses:</h3>" + guesses +", ";
document.onkeyup = function(event) {

    // Determines which exact key was selected. Make it lowercase
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // Alerts with user guess
    console.log("userGuess" + userGuess);
    // Create code to randomly choose one of the three options (Computer)
    var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
    // Alerts with Computer guess
    console.log("computerGuess" + computerGuess);

    if(guesses<=10) {

        if (userGuess == computerGuess) {
            alert("YOU WIN!");
            wins++;
        }
        else if(userGuess!=computerGuess) {
            guesses++;
        }
    }else{
        alert("Game Over You Lost!");
        losses++;
        guesses = 0;
        userGuess= 0;

    }
    document.getElementById("wins").innerHTML ="<h3>Wins:</h3>"  + wins;

    document.getElementById("losses").innerHTML ="<h3>losses:</h3>" + losses;

    document.getElementById("guesses").innerHTML ="<h3>guesses:</h3>" +userGuess +", ";
}





