var firstNumInput = document.getElementById("firstNum");
var secondNumInput = document.getElementById("secondNum");
var outputForm = document.getElementById("output");

function multiply() {
    outputForm.innerText = firstNumInput.value * secondNumInput.value;
}

function divide() {
    outputForm.innerText = firstNumInput.value / secondNumInput.value;
}
