//создание функции поиска максимального объекта массива
function getMaxNumber(arr) {

    //использование методов Math.max и apply с передачей элементов массива
    return Math.max.apply(null,arr);
}

/*
 //создание функции поиска максимального объекта массива
function getMaxNumber(arr) {

    //создание переменной максимальное число, которое равно первому элементу массива
    var maxNumber = arr[0];

    //создание цикла перебора элементов массива
    for (var i = 1; i < arr.length; i++){

        //условие (если элемент массива больше максимального значения)
        if (arr[i] > maxNumber){

            //максимальное значение равно элементу массива
            maxNumber = arr[i];
        }
    }

    //возврат функцией максимального значения
    return maxNumber;
}
*/

console.log( getMaxNumber([1,30,40,2,7]) ); // 40
console.log( getMaxNumber([1,15,-20,2,-7]) ); // 15