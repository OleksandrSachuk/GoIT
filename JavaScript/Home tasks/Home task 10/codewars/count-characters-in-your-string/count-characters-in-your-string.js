function count (string) {
    var obj = {};
    var arr = [];
    arr = string.split("");
    if (string.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] in obj){
                obj[arr[i]] += 1;
            } else {
                obj[arr[i]] = 1;
            }
        }
        return obj;
    } else {
        return { };
    }
}
/*
 function count (string) {
 var count = {};
 string.split("").forEach(function(s){
 count[s] ? count[s]++ : count[s]=1;
 })
 return count;
 }
 */
/*
function count (string) {
    return string.split("").reduce(function(obj, elem) {
        if (elem in obj)
            obj[elem]++;
        else
            obj[elem] = 1;
        return obj;
    }, {});
}
*/
console.log( count("aba") );