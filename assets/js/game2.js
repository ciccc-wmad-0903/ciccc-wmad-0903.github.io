function myFunction(){

    var num1 = document.getElementById("num1").value;

    if (num1 < 1) {
        document.getElementById("g2Output").innerHTML = "Your Number is incorrect, please try again";
    } else if (num1 == 1) {
        document.getElementById("g2Output").innerText = "I'm sorry your number isn't prime, please try again";
    } else {
        var isPrime = 0;
        for (var i = 2; i<num1; i++)
        {
            if (num1 % i == 0) {
                isPrime = 1;
                break;
            }
        }    
        if (isPrime == 0) {
            document.getElementById("g2Output").innerText = " Your Number is Prime!";
        }
        else if (num1 <= 1){
            document.getElementById("g2Output").innerHTML = "Your Number is incorrect, please try again";
        } 
        else {
            document.getElementById("g2Output").innerText = "I'm sorry your number isn't prime, please try again";
        }
    }
}