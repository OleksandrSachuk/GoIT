var arr = [5, 7, 4, 8, 3, 0];
function filterRange(arr, a, b) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] >= a) && (arr[i] <= b)) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}
console.log(filterRange(arr, 3, 5));
console.log(arr);