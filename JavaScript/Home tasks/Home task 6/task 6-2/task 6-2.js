//создание исходного массива
var arr = ['HTML', 'JavaScript', 'CSS'];

////создание нового пустого массива
var arrSorted = [];

//копирование исходного массива в новый массив
arrSorted = arr.slice(0);

//сортировка нового массива
arrSorted.sort();

//вывод в консоль отсортированого массива
console.log( arrSorted ); // CSS, HTML, JavaScript

//вывод в консоль исходного массива
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
