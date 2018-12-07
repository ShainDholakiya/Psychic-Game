var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;

var losses = 0;

var guessesLeft = 10;

var guessesSoFar = 0;

var guessedLetters = [];

document.onkeyup = function (event) {
    
    var userGuess = event.key;
    
    var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    
    if (userGuess === computerGuess) {
        
        alert("You have guessed the correct letter! " + computerGuess);
        
        wins++
        
        guessesLeft = 10;
        
        guessedLetters = [];
    
    }
    
    if (userGuess != computerGuess) {
        
        guessedLetters.push(userGuess);
        
        guessesLeft--;
        
        guessesSoFar++;
    
    }
    
    if (guessesLeft === 0) {
        
        alert("You lost. Try again.");
        
        guessesLeft = 10;
        
        losses++;
        
        guessedLetters = [];
    
    }
    
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    
    document.getElementById("losses").innerHTML = ("Losses: " + losses);
    
    document.getElementById("guessesLeft").innerHTML = ("Guesses Left: " + guessesLeft);
    
    document.getElementById("guessesSoFar").innerHTML = ("Your guesses so far: " + guessedLetters);

}