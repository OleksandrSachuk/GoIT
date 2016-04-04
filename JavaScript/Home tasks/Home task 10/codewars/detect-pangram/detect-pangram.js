function isPangram(string){
    string = string.toLowerCase();
    console.log("abcdefghijklmnopqrstuvwxyz".split(""));
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
        return string.indexOf(x) !== -1;
    });
}
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));
/*
function isPangram(string){
    var result = 0;
    var number = 0;
    var arr = string.toLowerCase().split("").sort();
    var j = 1;
    while (arr[j] === arr[j-1]){
        clearArr(arr);
        j++;
    }
    for (var x = 0; x < arr.length; x++){
        if (+arr[x] >0) number = x;
    }

    for (var k = (arr.lastIndexOf(".") + 1) || (arr.lastIndexOf(" ") + 1 || (number + 1)); k < arr.length; k++){
        result += 1;
    }
    if (result === 26) {
        return true;
    } else {
        return false;
    }

}
function clearArr(arr){
    var i = 1;
    while (i < arr.length){
        if (arr[i] === arr[i-1]) arr.splice(i,1);
        i++;
    }
    return arr;
}

console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));
*/