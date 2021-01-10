mainQuiz();

function mainQuiz() {
    // WELCOME PAGE
    buildWelcomePage();
    countdown();

    // buildResultPage();
    // START QUIZ
    // QUIZ HTML
    // START TIMER
    // Display Questions
    // 



}

// Build the welcome page
function buildWelcomePage() {
    // Declare variables to be used for card manipulation
    let eCard = document.getElementById("card-body")
    let eCardChildren = document.getElementById("card-body").children;
    let eCardContainer = document.getElementsByClassName("card");

    // Remove card container border
    eCardContainer[0].style = "border: none";
    for (let i = 0; i < eCardChildren.length; i++) {
        eCardChildren[i].style.visibility = "hidden";
    }

    // Create welcome page content
    let heading = document.createElement("H2");
    heading.textContent = "Coding Quiz Challenge"
    heading.style = "font-weight: bold; text-align: center";
    eCard.appendChild(heading);

    let paragraph = document.createElement("P");
    paragraph.textContent = "Try to answer the following code-related questions within the tie limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    paragraph.style = "text-align: center";
    eCard.appendChild(paragraph);

    let btnStart = document.createElement("BUTTON");
    btnStart.textContent = "Start Quiz"
    btnStart.setAttribute("id", "startQuiz");
    btnStart.setAttribute("type", "button");
    btnStart.setAttribute("class", "btn btn-primary d-block mb-1 pt-0 pb-0 btn-sm m-auto");
    btnStart.setAttribute("id", "startQuiz");
    eCard.appendChild(btnStart);



}


function countdown() {
    var timeLeft = 300;
    var stimeLeft = document.getElementById("timeLeft")
    stimeLeft.textContent = timeLeft
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

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

