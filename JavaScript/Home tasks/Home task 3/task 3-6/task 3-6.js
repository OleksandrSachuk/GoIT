//get variable value x
var x = +prompt("Please, enter a number x ","");

//get variable value n
var n = +prompt("Please, enter a number n ","");
alert(pow(x, n));
function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result = result * x;
    }
    return result;
}
