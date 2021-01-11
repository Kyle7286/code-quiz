// Start Quiz on click; call startQuiz Function
document.getElementById("startQuiz").addEventListener("click", startQuiz);

// Main function that calls all sub functions
function startQuiz() {
    countdown();
}


function countdown() {
    var timeLeft = 300;
    var stimeLeft = document.getElementById("timeLeft");
    stimeLeft.textContent = timeLeft;
    
    // Declare Questions Object with 
    var oQuestions = [{ q1: "Sky blue?", a1: [true, "Blue"], a2: [false, "Red"], a3: [false, "Green"], a4: [false, "Yellow"] }, { q2: "Earth flat?", a: false }, { q: "Pizza good?", a: true }];
    document.getElementById("question").textContent = oQuestions[0].q1;
    console.log(oQuestions[0].a1[0]);
    for (let i = 0; i < oQuestions.length; i++) {
        document.getElementById("btn_answer1").textContent = oQuestions[0].a1[1];
        document.getElementById("btn_answer2").textContent = oQuestions[0].a2[1];
        document.getElementById("btn_answer3").textContent = oQuestions[0].a3[1];
        document.getElementById("btn_answer4").textContent = oQuestions[0].a4[1];
    }

    
    




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




// Build the welcome page
function buildWelcomePage() {
    // Declare variables to be used for card manipulation
    // let eCard = document.getElementById("card-body")
    // let eCardChildren = document.getElementById("card-body").children;
    // let eCardContainer = document.getElementsByClassName("card");

    // // Remove card container border
    // eCardContainer[0].style = "border: none";
    // for (let i = 0; i < eCardChildren.length; i++) {
    //     eCardChildren[i].style.visibility = "hidden";
    // }

    // // Create welcome page content
    // let heading = document.createElement("H2");
    // heading.textContent = "Coding Quiz Challenge"
    // heading.style = "font-weight: bold; text-align: center";
    // eCard.appendChild(heading);

    // let paragraph = document.createElement("P");
    // paragraph.textContent = "Try to answer the following code-related questions within the tie limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    // paragraph.style = "text-align: center";
    // eCard.appendChild(paragraph);

    // let btnStart = document.createElement("BUTTON");
    // btnStart.textContent = "Start Quiz"
    // btnStart.setAttribute("id", "startQuiz");
    // btnStart.setAttribute("type", "button");
    // btnStart.setAttribute("class", "btn btn-primary d-block mb-1 pt-0 pb-0 btn-sm m-auto");
    // btnStart.setAttribute("id", "startQuiz");
    // eCard.appendChild(btnStart);

}