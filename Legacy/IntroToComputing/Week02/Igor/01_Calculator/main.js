function multiplyBy() {
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerText = num1 * num2;
}
function divideBy() {
    var num1 = document.getElementById("firstNumber").value;
    var num2 = document.getElementById("secondNumber").value;

    document.getElementById("result").innerText = num1 / num2;
}