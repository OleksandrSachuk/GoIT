//создание функции сортировки строки в алфавитном порядке
function alphabetString (string){

    //создание массива букв из строки, сортировка массива, соединение элементов массива в строку, возврат результата
    return string.split("").sort().join("");
}
console.log( alphabetString("webmaster") );