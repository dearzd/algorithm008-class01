/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let cache = [];

    const len1 = text1.length;
    const len2 = text2.length;

    const index1 = text1.indexOf(text2.charAt(0));
    for (let i = 0; i < len1; i++) {
        cache[i] = new Array(len2);
        cache[i][0] = (index1 === -1 || i < index1) ? 0 : 1;
    }

    const index2 = text2.indexOf(text1.charAt(0));
    for (let j = 0; j < len2; j++) {
        cache[0][j] = index2 === -1 || j < index2 ? 0 : 1;
    }

    for (let i = 1; i < len1; i++) {
        for (let j = 1; j < len2; j++) {
            if (text1.charAt(i) === text2.charAt(j)) {
                cache[i][j] = cache[i - 1][j - 1] + 1;
            } else {
                cache[i][j] = Math.max(cache[i - 1][j], cache[i][j - 1]);
            }
        }
    }

    return cache[len1 - 1][len2 - 1];
};

var longestCommonSubsequence_first = function(text1, text2) {
    let max = 0;

    let isValid = function(str) {
        let indexIn2 = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charAt(i);
            let in2 = false;
            for (let j = indexIn2; j < text2.length; j++) {
                if (text2.charAt(j) === char) {
                    indexIn2 = j + 1;
                    in2 = true;
                    break;
                }
            }
            if (!in2) return false;
        }
        return true;
    }

    let findSub = function(index, str) {
        // console.log(str);
        for (let i = index; i < text1.length; i++) {
            const nextStr = str + text1.charAt(i);

            if (isValid(nextStr)) {
                max = Math.max(max, nextStr.length);
                findSub(i + 1, nextStr);
            }
        }

    };

    findSub(0, '');

    return max;
};

console.log(longestCommonSubsequence('abcde', 'ace'), 3);
console.log(longestCommonSubsequence('abc', 'def'), 0);
console.log(longestCommonSubsequence('ezupkr', 'ubmrapg'), 2);
console.log(longestCommonSubsequence('bsbininm', 'jmjkbkjkv'), 1);
console.log(longestCommonSubsequence('pcbmdupybalwpkbidypqbwhefijytypwdwbsharqdurkrslqlqla', 'jodcpirubsryvudgpwncrmtypatunqpkhehuhkdmbctyxghsfktaz'), 15);
