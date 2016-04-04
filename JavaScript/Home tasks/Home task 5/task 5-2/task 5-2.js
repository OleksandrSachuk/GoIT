// создание объкта с указанием его свойств и значений
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

//создание функции
function multiplyNumeric(image) {

    //цикл проверки свойств объекта
    for (var key in image) {

        //проверка на условие на является ли значение isNaN
        if ( !isNaN(image[key])) {

            //если нет, то каждое значение свойства умножается на два
            image[key] *= 2;
        }
    }

    //возврат измененного объекта
    return image;
}

//вывод измененного объекта в консоль
console.log( multiplyNumeric(image) );
