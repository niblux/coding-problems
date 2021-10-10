/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

https: //leetcode.com/problems/two-sum/

    // First Attempt
    var twoSum = function (nums, target) {
        var result = [];
        var temp = 0;
        for (i = 0; i < nums.length; i++) {
            temp = nums[i] + nums[i + 1]
            if (temp === target) {
                result.push(nums.indexOf(nums[i]));
                result.push(nums.indexOf(nums[i + 1]));
            }
        }
        return result;
    };

// Test Case 1. - Passes
console.log('two sum', twoSum([2, 7, 11, 15], 9));

// Test Case 2. - Fails ???  
console.log('two sum', twoSum([3, 3], 6));