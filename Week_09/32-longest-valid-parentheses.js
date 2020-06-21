/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(') {
            stack.push(i);
        } else if (s.charAt(i) === ')') {
            let top = stack.pop();
            if (top === ')') {
                max = Math.max(max, i - top);
            }
        }
    }
    return max;
};

var longestValidParentheses_first = function(s) {
    let max = 0;

    let isValid = function(str) {
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) === '(') {
                stack.push('(');
            } else if (str.charAt(i) === ')') {
                if (!stack.length) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length === 0;
    };

    let sub = '';
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            sub = s.substring(i, j + 1);
            if (sub.length > max && isValid(sub)) {
                max = sub.length;
            }
        }
    }

    return max;
};

console.log(longestValidParentheses(')()())'), 4);
console.log(longestValidParentheses('(()'), 2);
console.log(longestValidParentheses('()'), 2);