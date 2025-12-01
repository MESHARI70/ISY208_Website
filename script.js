window.onload = function() {
    let password = "";

    while (password !== "0000") {
        password = prompt("Enter password: Hint (0000)");

        if (password === null) {
            alert("You must enter the password to continue");
        } 
        else if (password !== "0000") {
            alert(" try again");
        }
    }

};
