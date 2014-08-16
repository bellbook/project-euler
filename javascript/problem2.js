// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fibonacci(max) {
    var list = [];
    var low = 1, high = 1;
    while (high < max) {
        var tmp = low;
        low = high;
        high = tmp + high;
        list.push(low);
    }
    return list;
}

var sum = 0;
var array = fibonacci(4000000);
for (var i = 0; i < array.length; i++)
    if (array[i] % 2 === 0)
        sum += array[i];
console.log(sum);