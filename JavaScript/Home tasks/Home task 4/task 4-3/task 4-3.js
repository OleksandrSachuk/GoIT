//create function
function cutString(str) {

    //check length of the string
    if (str.length > 20) {

        //cut original string and add a new string "..."
        return str.slice(0,20) + "...";
    } else {
     return str;
    }
}
console.log( cutString("Lorem ipsum, lorem ipsum, lorem ipsum") );

