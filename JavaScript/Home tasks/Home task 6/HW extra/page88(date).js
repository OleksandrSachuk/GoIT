var date = new Date(2012,0,3); // 3 января 2012
function getWeekDay(date) {
    switch (date.getDay()) {
        case 0:
            return "вс";
            break;
        case 1:
            return "пн";
            break;
        case 2:
            return "вт";
            break;
        case 3:
            return "ср";
            break;
        case 4:
            return "чт";
            break;
        case 5:
            return "пт";
            break;
        case 6:
            return "сб";
            break;
    }
}
console.log( getWeekDay(date) ); // Должно вывести 'вт'

/*
 var date = new Date(2012,0,3); // 3 января 2012
 function getWeekDay(date) {
 var dayRus = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
 return dayRus[date.getDay()];
 }
 console.log( getWeekDay(date) ); // Должно вывести 'вт'
 */