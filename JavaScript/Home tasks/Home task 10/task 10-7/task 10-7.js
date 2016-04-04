//создани функции перемешивания элементов массива
function suffle(arr) {

    //применение метода сортировки массива
    return arr.sort(function () {
        return 0.5 - Math.random()
    })
}
console.log( suffle([1,2,3,4,5]));