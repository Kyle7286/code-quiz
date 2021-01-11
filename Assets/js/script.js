// Start Quiz on click; call startQuiz Function
document.getElementById("startQuiz").addEventListener("click", startQuiz);

// Declare Question Object, with answer pool objects to be randomized for the quiz later
var oQuestions = [
    {
        question: "Color",
        answers: [
            { Green: true },
            { Yellow: false },
            { Blue: false },
            { Red: false },
        ],
    },
    {
        question: "Number",
        answers: [
            { One: true },
            { Two: false },
            { Three: false },
            { Four: false },
        ],
    },
    {
        question: "Food",
        answers: [
            { "Sushi": true },
            { "Pizza": false },
            { "Hamburger": false },
            { "Raman": false },
        ],
    },
    {
        question: "Music",
        answers: [
            { "Seven Lions": true },
            { "Martin Garrix": false },
            { "David Guetta": false },
            { "Armin Van Buuren": false },
        ],
    },
    {
        question: "Car",
        answers: [
            { "Supra": true },
            { "Porche": false },
            { "Lambo": false },
            { "Gensis": false },
        ],
    },
];

// Global declarations
var gindexer = 0;                                   //for indexing thru each question as the appropriate functions are called
var aShuffQuestions = shuffleArray(oQuestions);     // Shuffle the questions to ensure not the same order each run

// Initial tasks
hideCard("questionPage");
hideCard("donePage");

// Main function that calls all sub functions
function startQuiz() {
    countdown();
    hideCard("welcomePage");
    showCard("questionPage");
    displayQuestion(aShuffQuestions, gindexer);     // Display current gindex question
    var answers = displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer
    onAnswerClick(answers);
}

function onAnswerClick(array) {
    // Event listener on any quiz button clicks
    var userSelection = document.getElementsByClassName('qbtn');
    for (let i = 0; i < userSelection.length; i++) {
        (function (index) {
            userSelection[index].addEventListener("click", function () {

                console.log(getAnswerValue(array, index));
                displayQuestion(aShuffQuestions, gindexer);
                displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer
                if (gindexer === oQuestions.length) {
                    console.log("Reached the end!");
                    hideCard("questionPage")
                    showCard("donePage");
                }

            })
        })(i);
    }
}

function getAnswerValue(array, index) {
    return (Object.values(array[index]))

}

// Hide the element that's passed
function hideCard(element) {
    let card = document.getElementById(element);
    card.style = "display: none";
}

function showCard(element) {
    let card = document.getElementById(element);
    card.style = "display: block";
}

// Display answers
function displayAnswers(array, index) {

    // for the question object, set the button text to the answer value
    let aShuffAnswers = shuffleArray(array[index].answers)
    for (let j = 0; j < aShuffAnswers.length; j++) {
        document.getElementById("a1").textContent = (Object.keys(aShuffAnswers[0]));
        document.getElementById("a2").textContent = (Object.keys(aShuffAnswers[1]));
        document.getElementById("a3").textContent = (Object.keys(aShuffAnswers[2]));
        document.getElementById("a4").textContent = (Object.keys(aShuffAnswers[3]));
    }
    gindexer++;
    return aShuffAnswers; //return the array of answers on 
}

// Display question, increment question indexer
function displayQuestion(array, index) {
    document.getElementById("question").textContent = array[index].question;
}

function countdown() {
    var timeLeft = 300;
    var stimeLeft = document.getElementById("timeLeft");
    stimeLeft.textContent = timeLeft;

    // document.getElementById("btn_answer1").addEventListener("click", stopTime);

    // Quiz Timer countdown
    var timeInterval = setInterval(function () {


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

    function stopTime() {
        stimeLeft.innerHTML = "";
        clearInterval(timeInterval);
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}











