function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;


    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        console.log(currentIndex, temporaryValue, randomIndex);
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;


        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        console.log(currentIndex, temporaryValue, randomIndex);

    }

    return array;
}


// Used like so
var arr = [2, 11, 37, 42];
newArr = shuffle(arr);
console.log(newArr);

