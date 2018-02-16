//array of object names to be able to pick a random object
var wordBank = ["luke skywalker", "spider man"];

//Objects are the words, will add more later
var skywalker = {
    answer: "luke skywalker",
    universe: "starWars",
    picture: "https://cdn.pastemagazine.com/www/articles/Once-and-Future-Luke-header.jpg",
    alt: "Luke Skywalker"
};
var spiderman = {
    answer: "spiderman",
    universe: "marvel",
    picture: "https://pmcvariety.files.wordpress.com/2017/02/spidermanavengersdowney.jpg?w=1000&h=563&crop=1",
    alt: "Spiderman"
};

var dashString = "-------------------------------------";
var newDashString = ""; //this will make the dashString the same length as the answer
var obj = "";
var wrongGuess = [];
var newDashArray = [];
var partialAnswer = "";

var wins = 0;
var lives = 6;

var wrong = function () {
    lives--;
    document.getElementById("strikes").innerHTML = lives;
};

var gameOver = function () {
    lives = 6;
    document.getElementById("strikes").innerHTML = lives;
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("previousAnswer").innerHTML = obj;
    word();
    space();
    //document.getElementById("currentGame").innerHTML = newDashString;
};

var victory = function () {
    wins++;
    gameOver();
    document.getElementById("wins").innerHTML = wins;
};

//automatically replace any - with spaces, let's get everything else working first
function space(){
    if (obj.indexOf(" ") !== -1) {
        for (i = 0; i < obj.length; i++) {
            if (obj.charAt(i) === " ") {
                newDashArray.splice(i, 1, " ");
            }
        }

        partialAnswer = newDashArray.join("");
        document.getElementById("currentGame").innerHTML = partialAnswer;
        }
    }

//pick a random word and create a dashString of the same length
function word() {
    obj = wordBank[Math.floor(Math.random() * wordBank.length)];
    newDashString = dashString.slice(0, obj.length);
    newDashArray = newDashString.split("");

    console.log(obj);
    console.log(newDashArray);
}

word();


   


document.onkeyup = function (event) {
    var guess = event.key;
    var objArray = obj.split("");
    var letter = obj.indexOf(guess);
    document.getElementById("currentGame").innerHTML = newDashString;
space();

    //add wrong guesses to the wrong guess div first time, take off point first time
    if (letter === -1) {
        if ((wrongGuess.indexOf(guess) === -1)) {
            wrongGuess.push(guess);
            //console.log(wrongGuess);
            document.getElementById("wrong").innerHTML = wrongGuess;
            wrong();
            if (lives === 0) {
                gameOver();
            }
        }
    }
    //make letter appear
    else if (letter !== -1) {
        for (i = 0; i < obj.length; i++) {
            if (guess === objArray[i]) {
                newDashArray.splice(i, 1, guess);
            }
        }

        partialAnswer = newDashArray.join("");
        document.getElementById("currentGame").innerHTML = partialAnswer;
        }
        if (partialAnswer === obj) {
            victory();
    }


}

/* Pseudocode
indexOf() will be our friend
+++Create objects with word, universe, picture, alt for picks
+++Have computer pick a random object 
    (might need to put object names into an array)
+++Computer determines length of string
Computer displays ___ for each letter and shows any spaces as appropriate
Computer displays background image based off of universe as clue
Let person hit a key
Create a for loop so that the program can check each letter to match to the key pressed
If that letter is correct - reveal where the letter is
If that letter is incorrect - remove remaining attempt and show letter in an incorrect box
If letter is already guessed - do nothing

If person gets word correct, give new word and add a point to the score
If person gets word wrong, show word then give new word and reset score to 0
Show picture and word regardless of right or wrong
Computer should automatically start next round



If there is time
Make a toggle button for easy/hard:
    Easy: a picture of the word is shown at the beginning
    Hard: a picture is shown once the turn is over
Add music/sound for victory
*/