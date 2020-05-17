/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length || !grid[0].length) return 0;

    let count = 0;
    let rowCount = grid.length;
    let colCount = grid[0].length;

    let clear = function (i, j) {
        if (i < 0 || j < 0 || i > rowCount - 1 || j > colCount - 1) return;
        if (grid[i][j] == 1) {
            grid[i][j] = 0;
            clear(i - 1, j);
            clear(i + 1, j);
            clear(i, j - 1);
            clear(i, j + 1);
        }
    };

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (grid[i][j] == 1) {
                count++;
                clear(i, j)
            }
        }
    }

    return count;
};

const test1 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
const test2 = [["1","1","1"],["0","1","0"],["1","1","1"]];
console.log(numIslands(test1), 1);
console.log(numIslands(test2), 1);