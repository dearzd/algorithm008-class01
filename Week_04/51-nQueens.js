/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];

    let cols = new Set();
    let slashes = new Set();
    let backSlashes = new Set();

    doTry(0, [], cols, slashes, backSlashes, n, result);

    return formatResult(result);
};

function doTry(row, solution, cols, slashes, backSlashes, n, result) {
    // terminator
    if (solution.length === n) {
        result.push([...solution]);
    }

    for (let col = 0; col < n; col++) {
        // current logic
        if (!isValid(row, col, cols, slashes, backSlashes)) continue;

        cols.add(col);
        slashes.add(row + col);
        backSlashes.add(row - col);

        // drill down
        doTry(row + 1, solution.concat(col), cols, slashes, backSlashes, n, result)

        // revert state
        cols.delete(col);
        slashes.delete(row + col);
        backSlashes.delete(row - col);
    }

}

function isValid(row, col, cols, slashes, backSlashes) {
    const slash = row + col;
    const backslash = row - col;
    return !cols.has(col) && !slashes.has(slash) && !backSlashes.has(backslash);
}

function formatResult(result) {
    //console.log(result);
    return result.map(solution => {
       return solution.map(x => {
          let xAxis = [];
          for (let i = 0; i < solution.length; i++) {
              if (i === x) {
                  xAxis.push('Q');
              } else {
                  xAxis.push('.');
              }
          }
          return xAxis.join('');
       });
    });
}

console.log(solveNQueens(4));
console.log(solveNQueens(0));