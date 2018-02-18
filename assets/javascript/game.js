/* universe key for background image and soundbites: 0: star wars, 1: marvel, 2: dc comics, 3: paw patrol*/
var skywalker = {
    answer: "luke skywalker",
    universe: 0,
    picture: "./assets/images/luke.jpg",
    alt: "Luke Skywalker"
};
var princess = {
    answer: "princess leia",
    universe: 0,
    picture: "./assets/images/princessleia.jpg",
    alt: "Princess Leia"
};
var hanSolo = {
    answer: "han solo",
    universe: 0,
    picture: "./assets/images/hanSolo.jpg",
    alt: "Han Solo"
};
var darth = {
    answer: "darth vader",
    universe: 0,
    picture: "./assets/images/vader.jpg",
    alt: "Darth Vader"
};
var yoda = {
    answer: "yoda ",
    universe: 0,
    picture: "./assets/images/yoda.jpeg",
    alt: "Yoda"
};
var thor = {
    answer: "thor ",
    universe: 1,
    picture: "./assets/images/thor.jpg",
    alt: "Thor"
};
var spiderman = {
    answer: "spiderman ",
    universe: 1,
    picture: "./assets/images/spiderman.jpg",
    alt: "Spiderman"
};
var ironman = {
    answer: "ironman ",
    universe: 1,
    picture: "./assets/images/ironman.jpg",
    alt: "Ironman"
};
var captain = {
    answer: "captain america",
    universe: 1,
    picture: "./assets/images/captain.jpg",
    alt: "Captain America"
};
var batman = {
    answer: "batman ",
    universe: 2,
    picture: "./assets/images/batman.jpg",
    alt: "Batman"
};
var superman = {
    answer: "superman ",
    universe: 2,
    picture: "./assets/images/superman.jpg",
    alt: "Superman"
};
var wonder = {
    answer: "wonder woman",
    universe: 2,
    picture: "./assets/images/wonder.jpg",
    alt: "Wonder Woman"
};
var marshall = {
    answer: "marshall ",
    universe: 3,
    picture: "./assets/images/marshall.jpg",
    alt: "Marshall"
};
var skye = {
    answer: "skye ",
    universe: 3,
    picture: "./assets/images/skye.jpg",
    alt: "Skye"
};
var chase = {
    answer: "chase ",
    universe: 3,
    picture: "./assets/images/chase.jpg",
    alt: "Chase"
};
var rocky = {
    answer: "rocky ",
    universe: 3,
    picture: "./assets/images/rocky.jpg",
    alt: "Rocky"
};
var rubble = {
    answer: "rubble ",
    universe: 3,
    picture: "./assets/images/rubble.jpg",
    alt: "rubble"
};

//array of object names to be able to pick a random object
var wordBank = [skywalker, princess, hanSolo, darth, yoda, thor, spiderman, ironman, captain, batman, superman, wonder, marshall, skye, chase, rocky, rubble];
//the background image is based on  object.universe
var background = ["./assets/images/starWars.jpg", "./assets/images/avengers.jpeg", "./assets/images/dc.jpg", "./assets/images/pawPatrol.jpg"];
//audio files, based on object.universe
var audio = ["./assets/mp3s/chewy_roar.mp3", "./assets/mp3s/smash.mp3", "./assets/mp3s/batman.mp3", "./assets/mp3s/dog3.mp3"]

var dashString = "-------------------------------------";
var newDashString = ""; //this will make the dashString the same length as the answer
var obj = "";
var wrongGuess = [];
var newDashArray = [];
var partialAnswer = "";
//These will all turn the object.keys into variables
var objUniverse;
var objPicture;
var objAlt;
var objAudio;

var wins = 0;
var lives = 6;

//Takes away a life
var wrong = function () {
    lives--;
    document.getElementById("strikes").innerHTML = lives;
};

//Starts a new game and resets lives and wrong guesses
var gameOver = function () {
    lives = 6;
    wrongGuess = [];
    document.getElementById("strikes").innerHTML = lives;
    document.getElementById("wrong").innerHTML = "";
    document.getElementById("previousAnswer").innerHTML = obj;
    document.getElementById("previousImg").innerHTML = ('<img src= "' + objPicture + '" alt= "' + objAlt + '">')
    word();
    backgroundImg();
    document.getElementById("currentGame").innerHTML = newDashString;
    space();
};

var song = function () {
    var sound = new Audio(objAudio)
    sound.play()
}
//Starts a new game and gives player a point
var victory = function () {
    wins++;
    song();
    gameOver();
    document.getElementById("wins").innerHTML = wins;
};

//automatically replace any - with spaces
function space() {
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
    var object = wordBank[Math.floor(Math.random() * wordBank.length)];
    obj = object.answer;
    objUniverse = background[object.universe];
    objAudio = audio[object.universe];
    objPicture = object.picture;
    objAlt = object.alt;
    newDashString = dashString.slice(0, obj.length);
    newDashArray = newDashString.split("");
    console.log(objUniverse);
    //console.log(obj);
}

function backgroundImg() {
    document.body.style.backgroundImage = 'url(' + objUniverse + ')';
}

word();

//responding to keystrokes
document.onkeyup = function (event) {
    
    backgroundImg();
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
                document.getElementById("previousAnswer").innerHTML = obj;

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