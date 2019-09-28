var number = Number(prompt("Integer Number? "));

var outputText = "Factorial of " + number + " is ";
if (number === 0) {
    outputText += 1;
} else if (number > 0) {
    var res = number;
    for (var i = number - 1; i > 1; --i) {
        res *= i;
    }
    outputText += res;
} else {
    outputText += "NaN";
}

document.getElementById("output").innerText = outputText;