/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        // str.substring(start, stop),
        // if stop > str.length - 1, will only return sub string until last character of str
        result += s.substring(i, i + k).split('').reverse().join('');
        result += s.substring(i + k, i + 2 * k);
    }
    return result;
};

var reverseStr_first = function(s, k) {
    let strArr = s.split('');

    let reverse = function(start, end) {
        let i = start;
        let j = end;
        let temp;
        while (i < j) {
            temp = strArr[i];
            strArr[i] = strArr[j];
            strArr[j] = temp;
            i++;
            j--;
        }
    };

    let i = 0;
    while (i < strArr.length) {
        if (i % (2 * k) === 0) {
            reverse(i, i + k - 1);
            i += 2 * k;
        }
    }

    return strArr.join('');
};

console.log(reverseStr('abcdefg', 2));