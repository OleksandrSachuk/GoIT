//создание первого объекта
var vasya = { name: 'Вася', age: 23 };

//создание второго объекта
var masha = { name: 'Маша', age: 18 };

//создание третьего объекта
var vovochka = { name: 'Вовочка', age: 6 };

//создание массива из трех объектов
var people = [ vasya , masha , vovochka ];

//применение к массиву метода сортировки и фунции сравнения по значению age
people.sort(function (a,b) {return a.age - b.age})

//вывод результата в консоль
console.log(people); // теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6