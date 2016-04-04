function addf (a) {
    return function (b) {
        return a + b;
    }
}
console.log(addf(3)(4)); // 7

