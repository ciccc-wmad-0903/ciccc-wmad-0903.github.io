const PRIZE_LENGTH = 3;

function result(){
    var prizeArray = [];
    while (prizeArray.length < PRIZE_LENGTH) {
        var temp = Math.floor(Math.random() * 10)+1;
        if (!prizeArray.includes(temp)) {
            prizeArray.push(temp);
        }
    }
    var d = parseInt(document.getElementById("g4_fin").value);
    var e = parseInt(document.getElementById("g4_sin").value);
    var f = parseInt(document.getElementById("g4_tin").value);
    if(d == e || d == f || e == f){
        alert("please put different number");
        return;
    }
    var inputArray = [d,e,f];
    var numNoAppear = 0;
    var indexArray = [];
    for (var i = 0; i < inputArray.length; ++i) {
        indexArray[i] = prizeArray.indexOf(inputArray[i]);
        if (indexArray[i] < 0) {
            numNoAppear++;
        }
    }
    document.getElementById("g4_output").innerHTML= prizeArray;
    if(indexArray[0] == 0 && indexArray[1] == 1 && indexArray[2] == 2) {
        document.getElementById("g4_output1").innerHTML="Congrats , your number is " + inputArray + " number and index are same as our number. You win $10000!!";
    }else if(indexArray[0] != -1 && indexArray[1] != -1 && indexArray[2] != -1) {
        document.getElementById("g4_output1").innerHTML="Congrats , your number is " + inputArray + " number are same as our number, but index is different. You win $3000!!";
    }else if(numNoAppear == 1) {
        document.getElementById("g4_output1").innerHTML="Congrats , your number is " + inputArray + " two number are same as our number. You win $1000!!";
    }else{
        document.getElementById("g4_output1").innerHTML="Sorry , your number is " + inputArray + " you can't win the prize...";
    }
}

