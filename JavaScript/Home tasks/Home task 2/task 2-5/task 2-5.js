//variables declaration
var name = 'admin', text;

//if name = 'admin' text = 'Hi'
text = (name == 'admin') ? 'Hi' :

    //if name = 'manager' text = 'Hello'
        (name == 'manager') ? 'Hello' :

        //if name = '' text = 'No login'
        (name == '') ? 'No login' :
            '';
console.log(text);
