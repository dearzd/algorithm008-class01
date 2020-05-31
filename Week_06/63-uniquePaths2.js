/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1) return 0;

    const rowCount = obstacleGrid.length;
    const colCount = obstacleGrid[0].length;

    if (obstacleGrid[rowCount - 1][colCount - 1] === 1) return 0;

    let cache = [1];

    for (let i = 1; i < colCount; i++) {
        cache[i] = (cache[i - 1] === 0) || obstacleGrid[0][i] === 1 ? 0 : 1;
    }

    for (let row = 1; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (obstacleGrid[row][col] === 1) {
                cache[col] = 0;
            } else {
                cache[col] += cache[col - 1] || 0;
            }
        }
    }

    return cache[colCount - 1];
};

var uniquePathsWithObstacles_first = function(obstacleGrid) {
    // If first cell is an obstacle, return 0
    if (obstacleGrid[0][0] === 1) return 0;

    const rowCount = obstacleGrid.length;
    const colCount = obstacleGrid[0].length;

    let cache = [].concat([0]);

    // Iteratively set first row
    for (let row = 0; row < rowCount; row++) {
        cache[row] = new Array(colCount);
        cache[row][0] = ((cache[row - 1] && cache[row - 1][0] === 0) || obstacleGrid[row][0] === 1) ? 0 : 1;
    }

    // Iteratively set first col
    for (let col = 0; col < colCount; col++) {
        cache[0][col] = (cache[0][col - 1] === 0 || obstacleGrid[0][col] === 1) ? 0 : 1;
    }

    // Go through
    for (let row = 1; row < rowCount; row++) {
        for (let col = 1; col < colCount; col++) {
            if (obstacleGrid[row][col] === 1) {
                cache[row][col] = 0;
            } else {
                cache[row][col] = cache[row - 1][col] + cache[row][col - 1];
            }
        }
    }

    return cache[rowCount - 1][colCount - 1];
};

var uniquePathsWithObstacles_first = function(obstacleGrid) {
    let cache = [];
    const rowCount = obstacleGrid.length;
    const colCount = obstacleGrid[0].length;

    let maxPath = function (row, col) {
        if (row < 0 || col < 0) return 0;
        if (row === 0 && col === 0) {
            if (obstacleGrid[rowCount - 1][colCount - 1] === 1) {
                return 0;
            } else {
                return 1;
            }
        }

        if (!cache[`${row},${col}`]) {
            if (obstacleGrid[rowCount - row - 1][colCount - col - 1] === 1) {
                cache[`${row},${col}`] = 0;
            } else {
                cache[`${row},${col}`] = maxPath(row - 1, col) + maxPath(row, col - 1);
            }
        }

        return cache[`${row},${col}`];
    };

    return maxPath(rowCount - 1, colCount - 1);
};


const grid = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
];

console.log(uniquePathsWithObstacles(grid));
console.log(uniquePathsWithObstacles([[1, 0]]));
console.log(uniquePathsWithObstacles([[0, 1]]));
console.log(uniquePathsWithObstacles([[0], [1]]));
console.log(uniquePathsWithObstacles([[0, 0], [1, 0]]));
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));