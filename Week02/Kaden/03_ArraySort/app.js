var fruits = ["Durian", "Figs", "Blackberries", "Elderberries", "Apricots", "Cherry", "Grapefruit"];
var output = document.getElementById("fruitsList");
var click_number = 0;

printOutput();

function sortAndReverse() {
    if (++click_number % 2) {
        fruits.sort();
    } else {
        fruits.reverse();
    }
    printOutput();
}

function printOutput() {
    var text = "";
    fruits.forEach((fruit) => {
        text += fruit + ", ";
    });
    output.innerText = text.substring(0, text.length - 2);
}