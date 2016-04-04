function type(arg) {
    if (typeof arg == "number") {
        return "This is a number";
    } else if (typeof arg == "string") {
        return "This is a string";
    } else if (typeof arg == "boolean") {
        return "This is a boolean";
    } else if (typeof arg == "object") {
        return "This is a object";
    } else if (typeof arg == "function") {
        return "This is a function";
    } else if (typeof arg == "undefined") {
        return "This is a undefined";
    }
}
console.log( type(10) );
console.log( type("string") );
console.log( type(true) );
console.log( type({}) );
console.log( type ( function(){} )  );
var a;
console.log( type (a) );