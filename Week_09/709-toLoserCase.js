/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let result = [];
    const start = 'A'.charCodeAt(0);
    const end = 'Z'.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code >= start && code <= end) {
            result.push(String.fromCharCode(code + 32));
        } else {
            result.push(str.charAt(i));
        }
    }
    return result.join('');

    //return str.toLowerCase();
};

console.log(toLowerCase('Hello'));