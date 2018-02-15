var letters = "qwertyuiopasdfghjklzxcvbnm";
        var pickedLetter = "";
        var randomLetter = function () {
            pickedLetter = letters[Math.floor(Math.random() * 26)]
        };
        randomLetter();

        console.log("Why are you looking here cheater?");
        console.log(pickedLetter);
        var wins = 0;
        var strikes = 0;
        var lives = 10;
        var lastLetter = "";

        var wrong = function () {
            strikes++;
            lives--;
        };

        var gameOver = function(){
            lastLetter = pickedLetter;
            randomLetter();
            lives = 10;
            strikes = 0;
        };

        var victory = function (){
            wins++;
            gameOver();
        };

        document.onkeyup = function game(event) {

            var action = event.key;
            if (action !== pickedLetter) {
                wrong();
                console.log("you picked " + action);
                if (lives === 0) {
                    gameOver();
                    document.getElementById("previous").innerHTML = lastLetter;
                    document.getElementById("score").innerHTML = wins;
                    console.log(pickedLetter);

                }
            } else if (action == pickedLetter) {
                victory();
                document.getElementById("previous").innerHTML = lastLetter;
                document.getElementById("score").innerHTML = wins;
                console.log(pickedLetter);
            }
            document.getElementById("attempts").innerHTML = strikes;
            document.getElementById("lives").innerHTML = lives;
        }
    

