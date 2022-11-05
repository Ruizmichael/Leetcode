/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let cache = {};
    
    for (let i = 0; i < nums.length; i++) {
        const pair = target - nums[i];
        if (pair in cache) return [cache[pair], i];
        cache[nums[i]] = i;
    }
    return null
};