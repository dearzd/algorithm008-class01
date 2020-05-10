/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        n = -n;
        const result = fastPow(x, n);
        return 1 / result;
    } else {
        return fastPow(x, n);
    }
};

function fastPow(x, n) {
    //console.log(x, n);
    if (n === 1) {
        return x;
    }

    let result;
    let subResult = myPow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        result = subResult * subResult;
    } else {
        result = subResult * subResult * x;
    }
    return result;
}

console.log(myPow(2, 10));
console.log(myPow(2, -10));
console.log(myPow(0.44528, 0));
console.log(myPow(2, -2147483648));