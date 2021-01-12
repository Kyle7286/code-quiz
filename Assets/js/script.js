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
var stopTime = 0;
var timeInterval;
var answerValue;
var stimeLeft = document.getElementById("timeLeft");

// Start Quiz on click; call startQuiz Function
document.getElementById("startQuiz").addEventListener("click", startQuiz);

// Main function that calls all sub functions
function startQuiz() {
    aShuffQuestions = getShuffledArray(oQuestions);     // Shuffle the questions to ensure not the same order each run, returns a new array.
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
            subtractTime(timeLeft)
        }

        // If the final question is answered then perform some functions and proceed to donePage
        if (gindexer === oQuestions.length) {
            console.log("Reached the end!");
            stopTime();
            hideCard("questionPage");
            showCard("donePage");
        }


    }

    // Subtract from time left
    function subtractTime(currentTimeLeft) {
        console.log("SUBTRACTING");
        timeLeft = (currentTimeLeft - 10);
        updateTimeLeft(timeLeft);
    }

    // Stop timer
    function stopTime() {
        clearInterval(timeInterval);
        console.log(stopTime);
    }

    function updateTimeLeft(currentTimeLeft) {
        stimeLeft.textContent = currentTimeLeft;
    }


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


var timeLeft = 75;
// Quiz Timer countdown
function countdown() {

    stimeLeft.textContent = timeLeft;

    timeInterval = setInterval(function () {
        console.log(timeLeft);

        if (timeLeft === 1) {
            stimeLeft.innerHTML = (timeLeft--) + " second left";
        }
        else if (timeLeft > 0) {
            stimeLeft.innerHTML = (timeLeft--) + " seconds left";
        }
        else {
            stimeLeft.innerHTML = "";
            clearInterval(timeInterval);
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



