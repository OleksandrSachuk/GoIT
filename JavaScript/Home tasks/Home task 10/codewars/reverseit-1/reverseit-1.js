function reverseIt(data){
    console.log(typeof data);
    if (typeof data == "string") {
        return data.split("").reverse().join("");
    } else if (typeof data == "number") {
        var str = String(data);
        return Number ( str.split("").reverse().join("") );
    } else {
        return data;
    }
}
console.log(reverseIt(123));