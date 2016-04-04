//создание функции калькулятора
function Calculator() {

    //создание объекта с указанием оператора и функции конкретного вычисления в соответсвии с оператором
    var operations = {

        //свойство объкта и функция вычитания
        "-": function(a,b){
            return a - b;
        },

        //свойство объкта и функция сложения
        "+": function(a,b){
            return a + b;
        }
    };

    //метод подсчета
    this.calculate = function(string){

        //создание массива по пробелу
        var splitArray = string.split(" ");

        //первый элемент массива преобразовать в число
        a = +splitArray[0];

        //инициализация переменной - оператор, которая равна второму элеинту массива
        operator = splitArray[1];

        //второй элемент массива преобразовать в число
        b = +splitArray[2];

        //возврат функции с указание оператора и значений
        return operations[operator](a,b);
    };

    //добавление нового метода
    this.addMethod = function(name, func) {
        operations[name] = func;
    }
}

//создание новой перемнной использая конструктор
var calc = new Calculator;

//вывод результатов
alert(calc.calculate("3 + 10"));

//создание новой перемнной использая конструктор
var powerCalc = new Calculator;

//создание нового метода умножения
powerCalc.addMethod('*',function(a,b){
    return a * b;
});

////создание нового метода деления
powerCalc.addMethod("/",function(a,b) {
    return a / b;
});

//создание нового метода возведения в степень
powerCalc.addMethod("**",function(a,b) {
    return Math.pow(a,b);
});

//инициализация переменной результат
var result = powerCalc.calculate("2 ** 3");

//вывод результата в консоль
console.log(result);
