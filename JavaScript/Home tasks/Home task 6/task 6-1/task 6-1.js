//создание объекта
var obj = {
    className: 'open menu'
};

//создание функции поиска и удаления класса
function removeClass(obj, cls){

    //создание пустого массива
    var arr = [];

    //передача в массив элементов строки className объекта
    arr = obj.className.split(" ");

    //создание цикла перебора элементов массива
    for (var i = 0; i < arr.length; i++) {

        //поиск заданого элемента в массиве
        if (arr[i] == cls) {

            //удаление элемента при его наличии
            arr.splice(i,1);
        }
        //объединение элеменотв массива в строку className объекта
        obj.className = arr.join(" ");
    }

    //возврат функцией объекта
    return (obj);
}

//вывод результата в консоль
console.log(removeClass(obj, 'open')); // obj.className='menu'
//console.log(removeClass(obj, 'blabla')); // без изменений
