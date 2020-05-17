/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let distance = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > distance) return false;
        distance = Math.max(distance, i + nums[i]);
        if (distance >= nums.length)  return true;
    }
    return true;
}




var canJump_first = function(nums) {
    if (!nums || !nums.length) return false;

    if (nums.length === 1) return true;

    return jump(0, nums);;
}

let jump = function(currentIndex, nums) {
    if (currentIndex >= nums.length) return false;

    let steps = nums[currentIndex];

    if (currentIndex + nums[currentIndex] >= nums.length - 1) return true;

    for (let i = 1; i <= steps; i++) {
        let result = jump(currentIndex + i, nums);
        if (result) {
            return true;
        }
    }

    return false;
}

console.log(canJump([2,3,1,1,4]), true);
console.log(canJump([2,0,0]), true);
console.log(canJump([0]), true);
console.log(canJump([3,2,1,0,4, 3]), false);
console.log(canJump([0, 2, 3]), false);