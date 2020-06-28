/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// todo, 改进 433 基因
var ladderLength = function(beginWord, endWord, wordList) {
    let queue = [beginWord];
    let visited = [];
    let index = wordList.indexOf(beginWord);
    if (index >= 0) {
        visited[index] = true;
    }
    let count = 0;
    while (queue.length) {
        let len = queue.length;
        count++;
        // console.log(queue);
        for (let i = 0; i < len; i++) {
            let start = queue.shift();
            for (let j = 0; j < wordList.length; j++) {
                if (visited[j]) {
                    continue;
                }
                if (!isNext(start, wordList[j])) {
                    continue;
                }
                if (wordList[j] === endWord) {
                    return count + 1;
                }
                queue.push(wordList[j]);
                visited[j] = true;
            }
        }
    }
    return 0;

    function isNext(wordA, wordB) {
        let differentCount = 0;
        for (let i = 0; i < wordA.length; i++) {
            if (wordA[i] !== wordB[i]) differentCount++;
            if (differentCount > 1) return false;
        }
        return differentCount === 1;
    }
};

var ladderLength_first = function(beginWord, endWord, wordList) {
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

        if (str === endWord) {
            count = sequence.length;
            return;
        }

        for (let i = 0; i < wordList.length; i ++) {
            if (isNext(str, wordList[i]) && sequence.indexOf(i) === -1) {
                dfs(wordList[i], sequence.concat(i));
            }
        }
    };

    dfs(beginWord, []);

    return count === Number.MAX_VALUE ? 0 : count + 1;
};

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]), 5);
console.log(ladderLength("teach", "place", ["peale","wilts","place","fetch","purer","pooch","peace","poach","berra","teach","rheum","peach"]), 4);
console.log(ladderLength(
    "qa",
    "sq",
    ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]
), 5);