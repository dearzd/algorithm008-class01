/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n;
    }
    var sum = 0;
    var i = 1;
    var j = 2;
    for (var x = 2; x < n; x++) {
        sum = i + j;
        i = j;
        j = sum;
    }
    return sum;
};

console.log(climbStairs(6));