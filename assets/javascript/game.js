//array of object names to be able to pick a random object
var wordBank = [skywalker, spiderman];

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
var newDashString; //this will make the dashString the same length as the answer

//pick a random word and create a dashString of the same length
function word(){
    var obj = wordbank[Math.floor(Math.random() * wordBank.length)];
    var newDashString = dashString.slice(0,obj.answer.length);
    console.log(obj.answer);
    console.log(newDashString);
}

//automatically replace any - with spaces
function space(){}
    if (obj.answer.indexOf(" ") !== -1) {

    }

    for (i=0; i<obj.answer.length; i++){
        
    }
}
document.onkeyup = function(event) {

}

/* Pseudocode
indexOf() will be our friend
+++Create objects with word, universe, picture, alt for picks
Have computer pick a random object 
    (might need to put object names into an array)
Computer determines length of string
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