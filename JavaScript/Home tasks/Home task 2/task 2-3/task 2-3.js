//variable declaration userLogin
var userlogin = prompt ("Please, enter you login?","");

//if userLogin is 'admin'
if (userlogin == "admin") {

    //variable declaration userPassword
    var userPassword = prompt("Please, enter you password?", "");

    //alert if userPassword is 'passw0rd'
    if (userPassword == "passw0rd") {
        alert('Welcome home!');
    }
    //alert if userPassword is null (canceled)
    else if (userPassword == null) {
        alert("Canceled");
    }
    //alert if userPassword is wrong
    else {
        alert("Wrong password");
    }
}
    //alert if userLogin is null (canceled)
else if (userlogin == null) {
    alert("Canceled");
}

    //alert if userLogin is wrong
else {
    alert ('Access denied');
}
