function descendingOrder(n) {
   return Number(String(n).split('').sort().reverse().join(""));
}
console.log(descendingOrder(123456789));//654321
/*
function descendingOrder(n) {
    var arr = n.toString().split("");
    for (i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
    }
    arr.sort();
    return +arr.reverse().join("");
}
console.log(descendingOrder(123456789));//654321
    */