/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    let count = Number.MAX_VALUE;

    let isNext = function(strA, strB) {
        let differentCount = 0;
        for (let i = 0; i < strA.length; i++) {
            if (strA.charAt(i) !== strB.charAt(i)) differentCount++;
            if (differentCount > 1) return false;
        }
        return differentCount === 1;
    };

    let dfs = function(str, sequence) {
        if (sequence.length > count) return;

        if (str === end) {
            count = sequence.length;
            return;
        }

        for (let i = 0; i < bank.length; i ++) {
            if (isNext(str, bank[i]) && sequence.indexOf(i) === -1) {
                dfs(bank[i], sequence + i);
            }
        }
    };

    dfs(start, '');

    return count === Number.MAX_VALUE ? -1 : count;
};

const start = 'AACCGGTT';
const end = 'AAACGGTA';
const bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];
console.log(minMutation(start, end, bank));

console.log(minMutation("AACCGGTT", "AAACGGTA", ["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"]));
