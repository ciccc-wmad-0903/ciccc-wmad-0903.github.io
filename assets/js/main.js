const   LAST_NAME_KEY   = "fpLastName",
        FIRST_NAME_KEY  = "fpFirstName";

// For displaying user information on Navbar
var firstName = window.localStorage.getItem(FIRST_NAME_KEY);
if (firstName != null) {
    document.getElementById("mainNavBarUserInfo").innerText = "Hi, " + firstName + "!";
}

function visibleGame() {
    document.getElementById("mainMenuContent").classList.remove('visible');
    document.getElementById("eachGameContent").classList.add('visible');
    switch (document.activeElement.id) {
        case "mainMenuGridItem1":
            document.getElementById("game1Content").classList.add('visible');
            break;

        case "mainMenuGridItem2":
            document.getElementById("game2Content").classList.add('visible');
            break;

        case "mainMenuGridItem3":
            document.getElementById("game3Content").classList.add('visible');
            break;

        case "mainMenuGridItem4":
            document.getElementById("game4Content").classList.add('visible');
            break;
    }    
}