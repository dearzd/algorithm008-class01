/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (let i = 0, j = height.length - 1; i < j; ) {
        const minHeight = height[i] < height[j] ? height[i++] : height[j--];
        const area = (j - i + 1) * minHeight;
        max = Math.max(area, max);
    }
    return max;
};

// below code is first time write algorithm
var maxArea_first = function(height) {
    let max = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(area, max);
        }
    }
    return max;
};