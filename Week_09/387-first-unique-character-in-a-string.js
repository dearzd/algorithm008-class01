/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        map[char] = (map[char] || 0) + 1;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (map[char] === 1) {
            return i;
        }
    }
    return -1;
};