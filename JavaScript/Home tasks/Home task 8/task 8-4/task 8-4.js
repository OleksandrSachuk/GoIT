//создание функции конструктора для вывода колличества статтей и последней даты
function Article() {

    //создание свойства даты
    this.created = new Date();

    ////статической свойству - переменной присваивается значение даты последней статьи
    Article.lastDateItem = this.created;

    //увеличение статического свойства - переменной на 1
    Article.counter++;
};

//статической свойству - переменной присваивается начальное значение 0
Article.counter = 0;

//создание статического метода
Article.showStats = function(){

    //вывод в консоль колличества статтей и даты последней статьи
    console.log("Всего: " + this.counter + "," + "Последняя: " + this.lastDateItem);
}

//запуск функции конструктора Article
new Article();

//запуск функции конструктора Article
new Article();

//запуск метода showStats функции конструктора Article
Article.showStats();

//запуск функции конструктора Article
new Article();

//запуск метода showStats функции конструктора Article
Article.showStats();