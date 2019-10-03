function g1InputUserName() {
    var firstName = document.getElementById("g1FirstName").value;
    var lastName = document.getElementById("g1LastName").value;

    if (firstName == "") {
        document.getElementById("output").innerText = "Input your name, Please :)";
        return;    
    }

    window.localStorage.setItem(FIRST_NAME_KEY, firstName);
    window.localStorage.setItem(LAST_NAME_KEY, lastName);

    document.getElementById("mainNavBarUserInfo").innerText = "Hi, " + firstName + "!";
    document.getElementById("g1Output").innerText
            = "Hello " + firstName + " " + lastName + ",\n Nice work! Let's start!";

}