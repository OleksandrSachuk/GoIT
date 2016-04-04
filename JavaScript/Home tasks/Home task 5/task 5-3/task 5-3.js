//создание функции проверки на число
function isNumeric(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
}
//создание пустого исходного массива
var arr = [];

//объявление переменной и присвоение ей значения
var arrItem = prompt("Please, enter an item of array","");

//цикл внесения значений в массив
//проверка условий: цикл прекращает работу исли введено пустую строку или не число, нажато "Отмена"
while (arrItem != null && isNumeric(arrItem)  ) {

    //внесение элементов в конец массива
    arr.push(arrItem);

    //повторный запрос на ввод переменной для повторной проверки в цикле
    arrItem = prompt("Please, enter an item of array","");
}

//вывод массива в консоль
console.log(arr);

