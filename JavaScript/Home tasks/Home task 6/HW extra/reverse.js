var arr = ["a","b","c","d","e"];
function arrReverse(arr) {
    var arrReverse = [];
    arrReverse.length = arr.length;
    for (i = 0; i < arr.length; i++) {
        arrReverse[i] = arr[arr.length-1-i];
    }
    return arrReverse;
}
console.log(arrReverse(arr));