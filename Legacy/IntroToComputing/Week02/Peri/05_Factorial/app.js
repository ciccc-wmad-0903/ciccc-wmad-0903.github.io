var usernum = prompt("Please type one number?");
	
if(isNaN(usernum)){
    document.getElementById("output").innerHTML = "Please input number.";
} else {
    document.getElementById("output").innerHTML = useWhile(usernum);

}

function useWhile(n) {
    if(n == 0){
        return 1;
    }
    
    var result = 1;
    while(n > 0){
        result = result * n;
        n = n - 1;
    }
    return result;
}