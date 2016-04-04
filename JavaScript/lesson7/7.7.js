var idf = identityf(3);
function identityf (a) {
    return function () {
        return a;
    }
}
console.log(idf()); // 3

