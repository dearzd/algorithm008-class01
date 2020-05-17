/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    let count = Number.MAX_VALUE;

    let DFS = function(current, steps) {
        if (current === end) {
            count = Math.min(count, steps.length);
        }

        if (steps.length > count) {
            return;
        }

        for (let i = 0; i < bank.length; i++) {
            if (isNext(current, bank[i]) && steps.indexOf(i) === -1) {
                DFS(bank[i], steps + i);
            }
        }
    };

    let isNext = function(strA, strB) {
        let diffCount = 0;
        for (let i = 0; i < strA.length; i ++) {
            if (strA[i] !== strB[i]) diffCount++;
            if (diffCount > 1) return false;
        }
        return diffCount === 1;
    };

    DFS(start, '');

    return count === Number.MAX_VALUE ? -1 : count;
};

const start = 'AACCGGTT';
const end = 'AAACGGTA';
const bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];
console.log(minMutation(start, end, bank));