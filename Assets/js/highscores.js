// Hide the navbar
var navvy = document.getElementById("navvy");
navvy.style.visibility = "hidden"

// get local storage array
var aStorage = getLocalStorage();

// Sort the array descneding by score value
aStorage.sort(function (a, b) {
    return parseFloat(b.score) - parseFloat(a.score);
});

// Loop thru array and create a row for each object; append to table body
var tableBody = document.getElementById("tBody");
for (let i = 0; i < aStorage.length; i++) {
    // Create new row
    let newRow = createTableRow(aStorage[i]);
    // Append new row
    tableBody.appendChild(newRow)
}

// Create new table, append localstarge data and hand it back
function createTableRow(object) {
    // Grab the elements
    var initials = object.initials;
    var score = object.score;
    var tableRow = document.createElement("TR");
    var tableData1 = document.createElement("TD");
    var tableData2 = document.createElement("TD");

    // Assign the text to the table data
    tableData1.textContent = initials;
    tableData2.textContent = score;

    // Append the data to the table row elements
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);

    // Hand back the newly built row
    return tableRow;
}

// Go back to main page if clicked
var goBack = document.getElementById("btnGoBack")
goBack.addEventListener("click", function () {
    window.location.href = "./index.html";
});

// Clear high scores if clicked
var clear = document.getElementById("btnClear")
clear.addEventListener("click", function () {
    localStorage.clear();
    clearAllTableRows()
});

// Remove all table child elements
function clearAllTableRows() {
    var tableBody = document.getElementById("tBody");
    while (tableBody.lastElementChild) {
        tableBody.removeChild(tableBody.lastElementChild);
    }
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