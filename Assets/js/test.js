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

var globalIndexer = 0;

console.log("======= ORIGINAL OBJ =======");
console.log(oQuestions);


console.log("======= PLAIN SHUFFLE OBJ =======");
console.log(shuffle(oQuestions));







console.log("======= SHUFFLED ARRAY =======");
var shuffledQuestions = getShuffledArray(oQuestions);
console.log(shuffledQuestions);


console.log("======= newARRAY.ANSWERS  =======");
console.log(shuffledQuestions[globalIndexer].answers);

console.log("======= SHUFFLED ANSWERS  =======");
var shuffledAnswers = getShuffledArray(shuffledQuestions[globalIndexer].answers)
console.log(shuffledAnswers);


console.log("======= ANSWERS LISTED =======");
console.log((Object.keys(shuffledAnswers[0])[0]));
console.log((Object.keys(shuffledAnswers[1])[0]));
console.log((Object.keys(shuffledAnswers[2])[0]));
console.log((Object.keys(shuffledAnswers[3])[0]));



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

function shuffle(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array
}




