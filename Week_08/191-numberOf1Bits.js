/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) !== 0) {
            count++;
        }
        mask = mask << 1;
    }

    return count;


    /*let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;*/
};

console.log(hammingWeight(9));