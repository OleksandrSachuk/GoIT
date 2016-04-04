//создание функции конструктора для получения полного имени юзера
function User(fullName){
    //создание свойства fullName
    this.fullName = fullName;

    //создание новых свойств firstName и lastName
    Object.defineProperties(this, {

        // создание свойства firstName
        firstName: {

            //использование функции get, которая возвращает значение свойства firstName
            get: function() {

                //возвращает первый элемент массива созданного из fullName путем разделения по пробелу
                return this.fullName.split(" ")[0];
            },

            //использования функции set для записи нового значения fullName
            set: function(firstNameNew){

                //новое значения fullName создается путем конкатинации нового значения firstNameNew и lastName
                this.fullName = firstNameNew + " " + this.lastName;

            }
        },
        // создание свойства lastName
        lastName: {

            //использование функции get, которая возвращает значение свойства lastName
            get: function(){

                //возвращает второй элемент массива созданного из fullName путем разделения по пробелу
                return this.fullName.split(" ")[1];
            },

            //использования функции set для записи нового значения fullName
            set: function(lastNameNew){

                //новое значения fullName создается путем конкатинации firstName и нового значения lastNameNew
                this.fullName = this.firstName + " " + lastNameNew;
            }
        }
    })
};

//создание нового объекта путем использования конструктора
var vasya = new User('Александр Пушкин');

//вывод в консоль свойства объкта firstName
console.log( vasya.firstName ); // Александр

//вывод в консоль свойства объкта lastName
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

//вывод в консоль свойства объкта fullName
console.log( vasya.fullName ); // Александр Толстой