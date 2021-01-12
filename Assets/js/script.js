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
var aShuffQuestions = getShuffledArray(oQuestions);     // Shuffle the questions to ensure not the same order each run
// var answers;

// Initial tasks
hideCard("questionPage");
hideCard("donePage");

// Start Quiz on click; call startQuiz Function
document.getElementById("startQuiz").addEventListener("click", startQuiz);

// Main function that calls all sub functions
function startQuiz() {
    countdown();
    hideCard("welcomePage");
    showCard("questionPage");
    displayQuestion(aShuffQuestions, gindexer);     // Display current gindex question
    answers = displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer
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

// Event listener on any quiz button clicks
var userSelection = document.getElementsByClassName('qbtn');
for (let i = 0; i < userSelection.length; i++) {
    (function (index) {
        userSelection[index].addEventListener("click", function () {
            getAnswerValue(answers, index);
            displayQuestion(aShuffQuestions, gindexer);

            answers = displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer

            if (gindexer === oQuestions.length) {
                console.log("Reached the end!");
                hideCard("questionPage")
                showCard("donePage");
            }
        })
    })(i);
}


function getAnswerValue(array, index) {
    let j = Object.values(array[index])
    console.log("======= VALUE GOTTEN  =======");
    console.log(j);
    return j
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
// Display question, increment question indexer
function displayQuestion(array, index) {
    let question = array[index].question;
    document.getElementById("question").textContent = question;
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



