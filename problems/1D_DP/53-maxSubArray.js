/**
 * @param {number[]} nums
 * @return {number}
 */
 // DP

var maxSubArray = function(nums) {
    const sum = [];
    sum[0] = nums[0];
    let max_sum = nums[0];
    for(let i=1; i < nums.length;i++){
        // 如果sum[i-1]是负数（比0小），那么这个“负数和”没必要继续累加了，只会越加越小
        sum[i] = Math.max(sum[i-1], 0) + nums[i];
        max_sum = Math.max(max_sum, sum[i]);
    }

    return max_sum;

};

/* var maxSubArray = function(nums) {
    let max_sum = nums[0]; // 初始值设置为第一个数的value
    const memo = [];
    memo[0] = nums[0];
    for(let i=1; i<nums.length; i++) {
        // 选择一下是“上个和”加上当前遍历到的nums[i]大，还是nums[i]大，如果是nums[i]大，就从当前nums[i]从新开始累加
        memo[i] = Math.max(memo[i-1]+nums[i], nums[i]); 
        max_sum = Math.max(max_sum, memo[i]);
    }
    return max_sum;
}; */