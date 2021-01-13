// Declare Question Object, with answer pool objects to be randomized for the quiz later
var oQuestions = [
    {
        question: "Color?",
        answers: [
            { Green: true },
            { Yellow: false },
            { Blue: false },
            { Red: false },
        ],
    },
    {
        question: "Number?",
        answers: [
            { One: true },
            { Two: false },
            { Three: false },
            { Four: false },
        ],
    },
    {
        question: "Food?",
        answers: [
            { "Sushi": true },
            { "Pizza": false },
            { "Hamburger": false },
            { "Raman": false },
        ],
    },
    {
        question: "Music?",
        answers: [
            { "Seven Lions": true },
            { "Martin Garrix": false },
            { "David Guetta": false },
            { "Armin Van Buuren": false },
        ],
    },
    {
        question: "Car?",
        answers: [
            { "Supra": true },
            { "Porche": false },
            { "Lambo": false },
            { "Gensis": false },
        ],
    },
];

// Global declarations
var gindexer = 0;  //for indexing thru each question as the appropriate functions are called
var stopTime = false;
var timeInterval;
var answerValue;
var stimeLeft = document.getElementById("timeLeft");
var lHighScores = document.getElementById("linkhighScore");
var timeLeft = 50;
var finalScore;
updateTimeLeft(timeLeft);

// Start Quiz on click; call startQuiz Function
document.getElementById("startQuiz").addEventListener("click", startQuiz);

// Main function that calls all sub functions
function startQuiz() {
    aShuffQuestions = getShuffledArray(oQuestions);     // Shuffle the questions to ensure not the same order each run, returns a new array.
    lHighScores.setAttribute("class", "nav-link disabled");
    countdown();
    hideCard("welcomePage");
    showCard("questionPage");
    selectAnswer()
    displayQuestion(aShuffQuestions, gindexer);     // Display current gindex question
    answers = displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer


    // Add event listeners for the buttons once quiz starts
    function selectAnswer() {
        document.querySelectorAll('.qbtn').forEach(item => {
            item.addEventListener('click', event => {
                //handle click
                answerSelected(item.getAttribute("data-array"))
            })
        })
    }

    // Handle the answer selections
    function answerSelected(buttonValue) {
        console.log("Passed answerSelected(): " + buttonValue);
        var value = getAnswerValue(answers, buttonValue);
        displayQuestion(aShuffQuestions, gindexer);
        answers = displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer

        // If answer selected is false... subtract time
        if (value === false) {
            subtractTime(timeLeft);
            console.log(value);
            displayDivResult(value);
        }
        else {
            displayDivResult(value);
        }

        // If the final question is answered then perform some functions and proceed to donePage
        if (gindexer === oQuestions.length) {
            console.log("Reached the end!");
            clearInterval(timeInterval);
            hideCard("questionPage");
            donePage();

        }
    }


}

function donePage() {
    var finalScore = document.getElementById("finalScore");
    var btnSubmit = document.getElementById("btnSubmit");
    var txtInitials = document.getElementById("txtbox_Initials");



    finalScore.textContent = timeLeft;
    lHighScores.setAttribute("class", "nav-link");
    showCard("donePage");

    // When user clicks on submit
    var strInitials = btnSubmit.addEventListener("click", function () {
        var value = txtInitials.value;
        if (value === "") {
            alert("Please enter you initials...\n I promise no one will judge you 😇")
        }
        else {
            console.log(txtInitials.value);
        }


    })
    // console.log(strInitials);





}


// Display Right or Wrong div based on value selected; timed
function displayDivResult(result) {
    var resultText = document.getElementById("resultText");
    showCard("divResult")
    if (result === false) {
        resultText.textContent = "Wrong!"
        setTimeout(function () {
            hideCard("divResult")
        }, 850)
    }
    else {
        resultText.textContent = "Correct!"
        console.log("INSIDE WRONG DIV");
        resultText.textContent = "Correct!"
        setTimeout(function () {
            hideCard("divResult")
        }, 850)
    }
}
// Subtract from time left
function subtractTime(currentTimeLeft) {
    timeLeft = (currentTimeLeft - 10);
    stimeLeft.textContent = timeLeft;
}
// update global timeleft variable
function updateTimeLeft(currentTimeLeft) {
    stimeLeft.textContent = currentTimeLeft;
}
// Display answers
function displayAnswers(array, index) {
    // for the question object, set the button text to the answer value
    currentAnswers = getShuffledArray(array[index].answers)

    document.getElementById("a1").textContent = (Object.keys(currentAnswers[0]));
    document.getElementById("a2").textContent = (Object.keys(currentAnswers[1]));
    document.getElementById("a3").textContent = (Object.keys(currentAnswers[2]));
    document.getElementById("a4").textContent = (Object.keys(currentAnswers[3]));

    gindexer++;

    return currentAnswers; //return the array of answers on 
}
// Get the value of the button clicked (true or false)
function getAnswerValue(array, index) {
    let j = Object.values(array[index])[0]
    console.log(j);
    return j
}
// Hide the element that's passed
function hideCard(element) {
    let card = document.getElementById(element);
    card.style = "display: none";
}
// Show the element that's passed
function showCard(element) {
    let card = document.getElementById(element);
    card.style = "display: block";
}
// Display question, increment question indexer
function displayQuestion(array, index) {
    let question = array[index].question;
    document.getElementById("question").textContent = question;
}

// Quiz Timer countdown
function countdown() {
    timeInterval = setInterval(function () {

        if (timeLeft <= 0) {
            stimeLeft.innerHTML = (timeLeft--);
            alert("OMG YOUR RAN OUT OF TIME!!!!!");
            clearInterval(timeInterval)
        }
        else {
            stimeLeft.innerHTML = (timeLeft--);
        }

    }, 1000);
}

function getShuffledArray(array) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray
}



