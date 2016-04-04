console.log(6%3);
function solution(number){
    var arr = [];
    var result = 0;
    for (var i = 1; i < number; i++){
        if ((i%3 == 0 && i%5 != 0) || (i%5 == 0)){
        arr.push(i);
        }
    }
    for (var j = 0; j < arr.length; j++){
        result +=arr[j];
    }
    console.log(arr);
    console.log(result);

}
console.log(solution(100));