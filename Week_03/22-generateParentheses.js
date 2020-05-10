/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    generateString(result, '(', 1, 0, n);
    return result;
};

var generateString = function(result, str, leftLength, rightLength, n) {
    if (str.length === n * 2) {
        result.push(str);
        return;
    }

    if (leftLength < n) {
        generateString(result, str + '(', leftLength +1, rightLength, n);
    }
    if (rightLength < leftLength) {
        generateString(result, str + ')', leftLength, rightLength + 1, n);
    }
};



var generateParenthesis_first = function(n) {
    let array = [];
    generateString_first('(', array, n * 2);
    console.log(array);
    return array.filter(str => isValid(str));
};

var generateString_first = function(str, array, n) {
    if (str.length === n) {
        array.push(str);
        return;
    }
    generateString_first(str + '(', array, n);
    generateString_first(str + ')', array, n);
};

var isValid = function(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {
            let char = stack.pop();
            if (char !== '(') return false;
        }
    }
    return !stack.length;
};

console.log(generateParenthesis(3));