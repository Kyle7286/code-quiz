// Hide the navbar
var navvy = document.getElementById("navvy");
navvy.style.visibility = "hidden"

var card = document.getElementById("card-body");
console.log(card);
var table = document.createElement("table");
table.setAttribute("class", "table-secondary");
card.append(table);

    // < table class="table-secondary" >...</table >