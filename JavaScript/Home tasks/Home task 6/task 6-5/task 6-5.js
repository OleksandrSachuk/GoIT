//создание функции для проверки на палиндром
function isPal(str) {

    //создание массива из строки в нижнем регистре по пробелу
    var arr = str.toLowerCase().split(" ");

    //объединение элементов массива в строку чтобы новая строка получилась без пробелов
    str = arr.join("");

    //передача посимвольно элементов строки в массив
    arr = str.split("");

    //создание строки из всех элементов массива в нормальном и обратном порядке для проверки равенства
    if (arr.join("") == arr.reverse().join("")) {
        return true;
    } else {
        return false;
    }
}

//вывод результатов в консоль
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false