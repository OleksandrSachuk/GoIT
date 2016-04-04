console.log(20%10);
function pattern(n){
    var output="";

    if (n > 0)
    {
        var results = [];
        var line = Array(n).join(" ");
        console.log(line);
        for (i=1; i <= n; i++)
        {
            line += (i % 10);
        }
        results.push(line);
        console.log(results);
        for (i=1; i < n; i++)
        {
            results.push(results[i-1].substring(1)+ " "); 
        }
        output = results.join("\n");
    }

    return output;
}
console.log( pattern(3) );

/*
 function pattern(n) {
 var i, line = '', lines = [];
 for (i=1;i<=n;i++) line += i%10;
 for (i=0;i<n;i++) lines.push(Array(n-i).join(' ')+line+Array(i+1).join(' '));
 return lines.join("\n");
 }
*/
/*
function pattern(n){
    var numbersArray = [];
    var whiteSpaceArray = [];
    var fullArray = [];
    var numbersString;
    var whiteSpaceString;
    var item;
    var finalString;

    for (var i = 1; i <= n; i++){
        numbersArray.push(i);
    }
    numbersString = numbersArray.join("");

    for (var j = 1; j < n; j++){
        whiteSpaceArray.push(" ");
    }

    whiteSpaceString = whiteSpaceArray.join("");
    item = whiteSpaceString + numbersString;

    for (var k = 0; k < n; k++){
        fullArray.push(item.substring(k));
    }

    return finalString = fullArray.join("\n");

}
console.log( pattern(3) );
 */