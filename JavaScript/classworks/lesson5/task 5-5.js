var arr = ["zero","one","two","three","four","five"];
function getPositonValue(arr,value) {
    for (var i = 0; i < arr.length; i++) {
       if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}
console.log(getPositonValue(arr,"four"));
console.log(getPositonValue(arr,"six"));
