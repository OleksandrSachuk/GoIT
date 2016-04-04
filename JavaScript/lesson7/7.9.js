function applyf(name) {
    return function (x) {
        return function (y) {
            return name(x)(y);
        }
    }
}
function add(x) {
    return function(y) {
        return x + y;
    }
}

function mul(x) {
    return function(y) {
        return x * y;
    }
}
var addf2 = applyf(add);
console.log(addf2(3)(4)); //7
console.log(applyf(mul)(3)(4)); //12


