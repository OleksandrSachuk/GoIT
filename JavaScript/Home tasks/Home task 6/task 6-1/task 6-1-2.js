//создание объекта
var obj = {
    className: 'my menu menu'
};

//создание функции поиска и удалени€ класса
function removeClass(obj, cls){

    //создание пустого массива
    var arr = [];
    var newArr = [];

    //передача в массив элементов строки className объекта
    arr = obj.className.split(" ");


    //создание цикла перебора элементов массива
    for (var i = 0; i < arr.length; i++) {

        //поиск уникального неповтор€ющегос€ элемнта в массиве
        if (arr[i] != cls) {

            //добавление уникального неповтор€ющегос€ элемнта в новый массив
            newArr.push(arr[i]);
        }
    }

    //объединение элементов нового массива в строку className объекта
    obj.className = newArr.join(" ");

    //возврат функцией объекта
    return (obj);
}

//вывод результата в консоль
console.log(removeClass(obj, 'menu')); // obj.className='menu'
console.log( obj.className ); // 'my'
