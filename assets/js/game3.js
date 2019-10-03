// // Game 3: Calculator
// Create a game to ask two numbers and answer as well. Later it shows correct answer with “You are
// correct” or “You are wrong, work harder
// 1 to 100

function calculate() {
    // Checks the value inside the Number input
     var number1 = parseInt(document.getElementById("number1").value);
     var number2 = parseInt(document.getElementById("number2").value);
     var calType = document.querySelector('input[id="cal_type"]:checked').value;
     var answer = parseInt(document.getElementById("answer").value);
     var result;

    
    // Checks calType and calculate
     if (calType == "1") {
        result = (number1 + number2);
     }else if  (calType == "2") {
        result = (number1 - number2)　;
     }else if  (calType == "3") {
        result = (number1 * number2)　;
     }else{
        result = (number1 / number2)　;
     }


// Create a game to ask two numbers and answer as well. Later it shows correct answer with “You are
// correct” or “You are wrong, work harder”.

     if (answer == result){
     document.getElementById("resultContainer").innerHTML ="The answer is " + result;
     document.getElementById("resultContainer1").innerHTML ="You are correct.";
     }
     else{
   document.getElementById("resultContainer").innerHTML ="The answer is " + result;
    document.getElementById("resultContainer1").innerHTML ="You are wrong... work harder.";

     }
    }
