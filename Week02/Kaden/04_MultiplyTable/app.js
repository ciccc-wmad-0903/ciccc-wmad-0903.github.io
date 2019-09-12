function generateTable() {
    var htmlText = getNumberTableText(document.getElementById("number").value);
    document.getElementById("output").innerHTML = htmlText;    
}

function generateAllTable() {
    var htmlText = "";
    for (var i = 1; i <= 10; ++i) {
        htmlText += "Table Number " + i + "</br>";
        htmlText += getNumberTableText(i);
        htmlText += "</br>";
    }
    document.getElementById("outputAll").innerHTML = htmlText;
}

function getNumberTableText(number) {
    var htmlText = "";
    for (var i = 1; i <= 10; ++i) {
        htmlText += (number + " x " + i + " = ") + (number * i) + "</br>";
    } 
    return htmlText;
}