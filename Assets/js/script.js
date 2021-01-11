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

    // Declare Question Object, with answer pool object to be randomized for the quiz later
    var oQuestions = [
        {
            question: "Color",
            answers: [
                { true: 1, a: "Green" },
                { false: 1, a: "Yellow" },
                { false: 1, a: "Blue" },
                { false: 1, a: "Red" },
                { false: 1, a: "Purple" },
            ],
        },
        {
            question: "Number",
            answers: [
                { true: 1, a: "1" },
                { false: 1, a: "2" },
                { false: 1, a: "3" },
                { false: 1, a: "4" },
                { false: 1, a: "5" },
            ],
        },
        {
            question: "Food",
            answers: [
                { true: 1, a: "Sushi" },
                { false: 1, a: "Pizza" },
                { false: 1, a: "Hamburger" },
                { false: 1, a: "Raman" },
                { false: 1, a: "Fried Chicken" },
            ],
        },
        {
            question: "Music",
            answers: [
                { true: 1, a: "Seven Lions" },
                { false: 1, a: "Martin Garrix" },
                { false: 1, a: "David Guetta" },
                { false: 1, a: "Armin Van Buuren" },
                { false: 1, a: "Tiesto" },
            ],
        },
        {
            question: "Car",
            answers: [
                { true: 1, a: "Supra" },
                { false: 1, a: "Porche" },
                { false: 1, a: "Lambo" },
                { false: 1, a: "Gensis" },
                { false: 1, a: "Bugatti" },
            ],
        },
    ];
    document.getElementById("question").textContent = oQuestions[0].q1;
    console.log(oQuestions);
    for (let i = 0; i < oQuestions.length; i++) {
        // document.getElementById("btn_answer1").textContent = oQuestions[0].a1[1]
        // document.getElementById("btn_answer2").textContent = oQuestions[0].a2[1];
        // document.getElementById("btn_answer3").textContent = oQuestions[0].a3[1];
        // document.getElementById("btn_answer4").textContent = oQuestions[0].a4[1];
    }


    document.getElementById("btn_answer1").addEventListener("click", stopTime);





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