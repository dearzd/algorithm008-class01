/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// todo, hash 应该怎么写
var threeSum = function(nums) {
    let list = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i - 1]) continue;
        for (let j = i + 1, k = nums.length - 1; j < k; ) {
            const sum = nums[j] + nums[k];
            if (sum === -nums[i]) {
                list.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (sum < -nums[i]) {
                j++;
            } else {
                k--;
            }
        }
    }
    return list;
};

var threeSum_first = function(nums) {
    let list = {};
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const numStr = [nums[i], nums[j], nums[k]]
                        .sort((a, b) => a - b)
                        .join(',');
                    list[numStr] = true;
                }
            }
        }
    }
    return Object.keys(list).map(l => l.split(',').map(n => Number(n)));
};

const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));