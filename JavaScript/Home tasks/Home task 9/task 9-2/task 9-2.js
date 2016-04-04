//создание функции суммирования
function sum(){

    //возврат функцией суммы аргументов, переданных с помощью методов reduce и call
    return [].reduce.call(arguments, function (a, b) {

        //возврат функцией суммы двух эелементов
        return a + b;
    });
}

//создание функции умножения
function mul(){

    //возврат функцией результата умножения аргументов, переданных с помощью методов reduce и call
    return [].reduce.call(arguments, function(a, b) {

        //возврат функцией результатов умножения двух эелементов
        return a * b;
    });
}

//создание функции умножения получения другой функции и ее аргументов
function applyAll(func){

    //возврат функцикй результата переданной функции и массива аргументов .скопированных при вызове функции
    return func.apply(this, [].slice.call(arguments, 1))
    }

alert( applyAll(sum, 1,2,3) );
alert( applyAll(mul,2,3,4) );
alert( applyAll(Math.max, 2, -2, 3) ); // 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2
