// Declare Question Object, with answer pool objects to be randomized for the quiz later
var oQuestions = [
    {
        question: "Variables defined inside a function are not accessible (visible) from _______ the function.",
        answers: [
            { outside: true },
            { inside: false },
            { beside: false },
            { over: false },
        ],
    },
    {
        question: "Which of the below is the proper syntax for generating a random integer between 1 to 10?",
        answers: [
            { "Math.floor(Math.random() * 10) + 1": true },
            { "Math.random() * 10 + 1": false },
            { "Math.floor(Math.random() * 1 ) + 10": false },
            { "Math.random() * 5 + 2": false },
        ],
    },
    {
        question: "Which is an example of a javascript library?",
        answers: [
            { "JQUERY": true },
            { "CSS": false },
            { "HTML": false },
            { "OBJECT": false },
        ],
    },
    {
        question: "Which of the below is true regarding CSS?",
        answers: [
            { "The styling in which was applied last will overwrite any similar styling before it.": true },
            { "CSS is the platform in which a web page's logic is written.": false },
            { "CSS is a library of Javascript in which extends its functionality.": false },
            { "Validates your HTML code for syntax errors.": false },
        ],
    },
    {
        question: "Which of the below is the proper syntax to concatenate strings \"Apple\" and \"pie\" together?",
        answers: [
            { "var pie = \"Apple\" + \"Pie\";": true },
            { "var pie = (Apple) ++ (Pie);": false },
            { "var pie = Apple += Pie;": false },
            { "var pie = Apple & Pie": false },
        ],
    },
    {
        question: "Which of these examples is properly folowing the \"camel case\" naming convention for variables?",
        answers: [
            { "var myArray = [];": true },
            { "var MyArray = [];": false },
            { "var myarray = [];": false },
            { "var Myarray = [];": false },
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
var timeLeft = 65;
var finalScore;
updateTimeLeft(timeLeft);
var scores = [];

// Temp code; will remove later
var audio = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LOZ/LOZ_Sword_Slash.wav");
document.getElementById("play").addEventListener("click", function (event) {
    console.log(event);
    audio.play();

})

// Start Quiz on click; call startQuiz Function
if (document.getElementById("startQuiz")) {
    document.getElementById("startQuiz").addEventListener("click", startQuiz);
}

// Main function that calls all sub functions
function startQuiz() {
    aShuffQuestions = getShuffledArray(oQuestions);     // Shuffle the questions to ensure not the same order each run, returns a new array, shuffled.
    lHighScores.setAttribute("class", "nav-link disabled");
    countdown();
    hideCard("welcomePage");
    showCard("questionPage");

    displayQuestion(aShuffQuestions, gindexer);     // Display current gindex question
    answers = displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer
    gindexer++;

    // Answer button click listener
    document.querySelectorAll('.qbtn').forEach(item => {
        item.addEventListener('click', event => {
            //handle click
            answerSelected(item, item.getAttribute("data-array"))
        })
    })


    var auHeart = new Audio("http://noproblo.dayjo.org/ZeldaSounds/OOT/OOT_Get_Heart.wav");
    var auError = new Audio("http://noproblo.dayjo.org/ZeldaSounds/LTTP/LTTP_Error.wav");
    // Handle the answer selections
    function answerSelected(buttonObj, buttonValue) {
        // Get value of answer
        var value = getAnswerValue(answers, buttonValue);

        // If answer selected is false... subtract time and display result div on a timer
        if (value === false) {
            subtractTime(timeLeft);
            displayDivResult(value);
            auError.play();
        }
        else {
            displayDivResult(value);
            auHeart.play();
        }

        // If the final question is answered then perform some functions and proceed to donePage
        if (gindexer >= oQuestions.length) {
            clearInterval(timeInterval);
            hideCard("questionPage");
            donePage();
            return;
        }


        displayQuestion(aShuffQuestions, gindexer);
        answers = displayAnswers(aShuffQuestions, gindexer);      // Display current gindex questions' answer

        gindexer++;
    }
}

function donePage() {
    // Grab the elements needed to work with
    var finalScore = document.getElementById("finalScore");
    var btnSubmit = document.getElementById("btnSubmit");
    var txtInitials = document.getElementById("txtbox_Initials");
    var auSmallItem = new Audio("http://noproblo.dayjo.org/ZeldaSounds/OOT/OOT_Fanfare_SmallItem.wav")

    auSmallItem.play();

    // Do some tidying up before showing the card
    finalScore.textContent = timeLeft;
    lHighScores.setAttribute("class", "nav-link");
    showCard("donePage");

    // When user clicks on submit, record highscore and initials
    btnSubmit.addEventListener("click", function (event) {
        event.preventDefault();

        var initials = txtInitials.value;
        if (initials === "") {
            alert("Please enter your initials...\nPromise no one will judge you 😇")
        }
        else if (initials.length < 2) {
            alert("Please enter at least 2 characters...")
        }
        else {
            // create user object from submission
            var user = {
                initials: txtInitials.value.trim(),
                score: timeLeft,
            };

            // Read local storage into array
            aStorage = getLocalStorage();

            // Push new object into array
            aStorage = pushLocalStorage(aStorage, user);

            // Set new submission to local storage 
            setLocalStorage(aStorage);

            // Go to highscore page
            window.location.href = "./highscores.html";
        }
    });

    function setLocalStorage(array) {
        localStorage.setItem("scores", JSON.stringify(array));
    }
    // Push an object into an existing array; return the array back
    function pushLocalStorage(array, object) {
        array.push(object)
        return array
    }
    // Retrieve the local storage data; if empty, return empty array
    function getLocalStorage() {
        var storageArray = [];
        if (!JSON.parse(localStorage.getItem("scores"))) {
            return storageArray;
        }
        else {
            storageArray = JSON.parse(localStorage.getItem("scores"));
            return storageArray;
        }
    }



}
// Display Right or Wrong div based on value selected; timed
function displayDivResult(result) {
    var resultText = document.getElementById("divResult");
    showCard("divResult")

    if (result === false) {
        resultText.textContent = "Wrong!"
        setTimeout(function () {
            hideCard("divResult")
        }, 850)
    }
    else {
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
    // If the element exists, b/c highscore
    if (stimeLeft) {
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

    return currentAnswers; //return the array of answers on 
}
// Get the value of the button clicked (true or false)
function getAnswerValue(array, index) {
    let j = Object.values(array[index])[0]
    return j;
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

        // If Time runs out... go to done page
        if (timeLeft <= 0) {

            clearInterval(timeInterval);
            hideCard("questionPage");
            donePage();
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



