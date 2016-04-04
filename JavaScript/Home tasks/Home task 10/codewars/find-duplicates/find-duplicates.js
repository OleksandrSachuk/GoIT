function duplicates(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i],i+1) >= 0 && newArr.indexOf(arr[i]) < 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));

/*
 function duplicates(arr) {
 for (var dup = [], i = 0; i < arr.length; i++) {
 var n = arr[i]
 if (arr.indexOf(n, i + 1) >= 0 && dup.indexOf(n) < 0) {
 dup.push(n)
 }
 }

 return dup
 }
 */