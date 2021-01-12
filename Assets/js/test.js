var timeInterval;

var qCard = document.getElementById("questionPage");
qCard.style = "display: block";

var btn_StartQuiz = document.getElementById("startQuiz");
btn_StartQuiz.addEventListener("click", startQuiz);
countdown(timeInterval);

function startQuiz() {
    clearInterval(timeInterval);
    console.log("Cleared time interval");
}


var userSelection = document.getElementsByClassName('qbtn');
for (let i = 0; i < userSelection.length; i++) {
    (function (index) {
        userSelection[index].addEventListener("click", function () {

            


        })
    })(i);
}


// Quiz Timer countdown
function countdown() {
    var timeLeft = 75;
    var stimeLeft = document.getElementById("timeLeft");
    stimeLeft.textContent = timeLeft;

    timeInterval = setInterval(function () {


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
