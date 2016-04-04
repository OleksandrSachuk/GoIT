//create function
function checkSpam(str) {

    //initialize new veriable - make original in lower case
    var strLowerCase = str.toLowerCase();

    //find words "sex" or "spam"
    return console.log(strLowerCase.indexOf("sex") > -1 || strLowerCase.indexOf("spam") > -1);
}
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false
