for (var i = 1; i <= 100; i++) {

//show "Fizz" if (i % 3 == 0)
    if (i % 3 == 0) {
        console.log("Fizz");

        //show "Buzz" if (i % 5 == 0 && !(i % 3 == 0))
    } else if (i % 5 == 0 && !(i % 3 == 0)) {
        console.log("Buzz");
    } else {

        //else show i
        console.log(i);
    }
}
