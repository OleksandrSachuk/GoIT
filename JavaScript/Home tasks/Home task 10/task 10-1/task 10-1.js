//создание объекта с его свойствами
var  obj = {
    person1Age: 20,
    person1Name: "Ivanov",
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',

    //создание метода получения чисел в объекте
    extractNumber: function () {

        //создание пустого массива
        var arrNumber = [];

        //цикл перебора свойств объекта
        for (var key in this) {

            //если тип значения свойства объекта число
            if (typeof this[key] == "number") {     // if (this[key] >= 0) {

                //добавить в массив значение свойства объекта
                arrNumber.push(this[key]);
                }
            }

        //возврат функцией массива чисел
        return arrNumber;
        },

    //создание метода получения строк в объекте
    extractString: function(){

    //создание пустого массива
    var arrString = [];

        //цикл перебора свойств объекта
        for (var key in this) {

            //если тип значения свойства объекта строка
            if (typeof this[key] == "string"){

                //добавить в массив значение свойства объекта
                arrString.push(this[key]);
            }
        }

        //возврат функцией массива строк
        return arrString;
    }
};

//присвоение переменной результатов вызова метода obj.extractNumber()
var ages = obj.extractNumber();

//вывод значения переменной в консоль
console.log(ages)//[20,30,40];

//присвоение переменной результатов вызова метода obj.extractString()
var names = obj.extractString();

//вывод значения переменной в консоль
console.log(names)//['Ivanov', 'Petrov', 'Sidorov'];