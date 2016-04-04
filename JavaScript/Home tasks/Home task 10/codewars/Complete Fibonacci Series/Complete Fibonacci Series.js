function fibonacci(n) {
    if (n <= 0) return [];
    if (n == 1) return [0];
    if (n == 2) return [0,1];
    var res = fibonacci(n-1);
    console.log(res);
    res.push(res[res.length-1] + res[res.length-2]);
    return res;
}
console.log( fibonacci(10) );
/*
function fibonacci(n) {
    var arr = [];
    var resultArr = [];
    if (n == 0 || n < 0) {
        return resultArr;
    } else if (n == 1) {
        return resultArr = [0];
    } else if (n == 2) {
        return resultArr = [0,1];
    }  else if (n > 2) {
        for (var i = 0; i <= n; i++){
            arr.push(i);
        }
        resultArr = [0,1];
        for (var j = 2; j < n; j++){
            var item = resultArr[j-1] + resultArr[j-2];
            resultArr.push(item);
        }
    }
    return resultArr;
}
console.log( fibonacci(10) );
    */