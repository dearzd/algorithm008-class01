/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sArray = s.split('');
    const tArray = t.split('');
    let countMap = {};
    for (let i = 0; i < sArray.length; i++) {
        countMap[sArray[i]] = countMap[sArray[i]] ? countMap[sArray[i]] + 1 : 1;
        countMap[tArray[i]] = countMap[tArray[i]] ? countMap[tArray[i]] - 1 : -1;
    }

    for (let i in countMap) {
        if (countMap[i] < 0) {
            return false;
        }
    }

    return true;
};
console.log(isAnagram("anagram", "nagaram"));


// 1. first sort
// 2. compare each array element
var isAnagram2 = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const arr1 = s.split('').sort();
    const arr2 = t.split('').sort();
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};