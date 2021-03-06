// Global variable definitions
var randomValue = 0;
var yourWins = 0;
var yourLosses = 0;
var yourScore = 0;

$(document).ready(function () {
    setUpGame();

    // Event listener to start game play when user clicks a crystal button
    $(".crystalButton").on("click", function () {

        // Add value of each clicked crystal to yourScore
        yourScore = yourScore + (Number($(this).attr("value")));
        $("#currentScore").text(yourScore);

        checkScore();

    });
});

// Win/loss conditions
function checkScore() {
    if (yourScore === randomValue) {
        yourWins++;
        $("#wins").text(yourWins);
        setUpGame();
    }

    else if (yourScore > randomValue) {
        yourLosses++;
        $("#losses").text(yourLosses);
        setUpGame();
    }
}

// Function that sets up/resets the game
function setUpGame() {

    // Generate random value between 19 and 120
    randomValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(randomValue);
    
    // Display the random value from above as the targetValue for this round
    $("#targetValue").text(randomValue);

    // Fill array crystalValues with 4 random, distinct numbers between 1 and 12
    var crystalValues = [];
    while (crystalValues.length < 4) {
        var randomnumber = Math.floor(Math.random() * 12) +1;
        if (crystalValues.indexOf(randomnumber) > -1) {
            continue;
        }
        crystalValues[crystalValues.length] = randomnumber;
    }
    console.log(crystalValues);

    // Assign these 4 numbers to respective crystal buttons
    $("#crystal1").attr("value", crystalValues[0]);
    console.log("Crystal 1 value - test", crystalValues[0]);

    $("#crystal2").attr("value", crystalValues[1]);
    console.log("Crystal 2 value - test", crystalValues[1]);

    $("#crystal3").attr("value", crystalValues[2]);
    console.log("Crystal 3 value - test", crystalValues[2]);

    $("#crystal4").attr("value", crystalValues[3]);
    console.log("Crystal 4 value - test", crystalValues[3]);

    //Reset score to 0
    yourScore = 0;
    $("#currentScore").text(yourScore);
}


