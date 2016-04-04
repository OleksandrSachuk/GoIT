var arr = ["zero","one","two","three","four","five"];
function getRandom(arr) {
    var min = 0, max = arr.length-1;
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
    //return rand; //проверка значения
    return arr[rand];
}
console.log(getRandom(arr));
