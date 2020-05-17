/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits || !digits.length) {
        return [];
    }

    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [''];

    for (let i = 0; i < digits.length; i++) {
        const candidate = map[digits.charAt(i)];

        while (result[0].length === i) {
            const str = result.shift();
            candidate.forEach(letter => result.push(str + letter));
        }
    }

    return result;
};


var letterCombinations_first = function(digits) {
    if (!digits || !digits.length) {
        return [];
    }

    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'F'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [];

    let helper = function(str, index) {
        if (str.length === digits.length) {
            result.push(str);
            return;
        }

        const candidate = map[digits.charAt(index)];

        candidate.forEach(letter => {
            helper(str + letter, index + 1);
        });
    }

    helper('', 0);

    return result;
};

console.log(letterCombinationss('23'));
