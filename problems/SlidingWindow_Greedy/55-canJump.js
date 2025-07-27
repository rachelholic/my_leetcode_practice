/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    let max_distance = 0;
    for(let i=0;i<nums.length;i++){
        if(i > max_distance) return false;
        // 所在元素的最大跳跃距离（从nums[0]开始）等于数组下标i加上当前元素的值
        max_distance = Math.max(i + nums[i], max_distance);
    }
    return true;
};