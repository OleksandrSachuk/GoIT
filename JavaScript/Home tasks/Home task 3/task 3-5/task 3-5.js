//variables declaration
var hesh = "#";
var whiteSpace = " ";
var string = "";

//cycle for 8 horizontal strings
for(var i = 1; i <= 8; i++) {

    //create empty string
    string = "";

    //cycle for creation a single string
    for(var j = 1; j<= 4; j++){

        //every even row will be start by white space
        if(i%2 == 0){
            string += whiteSpace + hesh;

            //every odd row will be start by hesh
        }else {
            string +=hesh + whiteSpace;
        }
    }
    console.log(string);
}
