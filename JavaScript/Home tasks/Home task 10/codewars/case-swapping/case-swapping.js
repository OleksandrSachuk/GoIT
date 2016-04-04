function swapCase(i){
    return i == i.toLowerCase() ? i.toUpperCase(): i.toLowerCase();
}
function swap(str){
    return str.split("").map(swapCase).join("");
}
console.log(swap('HelloWorld')) //'hELLOwORLD');
/*
function swap(str){
    var arr = str.split("");
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == arr[i].toLowerCase()){
            arr[i] = arr[i].toUpperCase();
        } else if (arr[i] == arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr.join("");
}
console.log(swap('HelloWorld')) //'hELLOwORLD');
*/