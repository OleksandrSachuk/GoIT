var iStart = 2;
var iFinish = 100;

//create label
next:

//start cycle from 2 to 10
for (var i = iStart; i < iFinish; i++ ) {

    //start new cycle from 2 to 10 where j = i - 1
    for (var j = iStart; j < i; j++) {

        //if i % j == 0 start main cycle with the label next again
        if (i % j == 0) continue next;
    }
    //if i % j != 0 alert(i)
    console.log(i);
}
