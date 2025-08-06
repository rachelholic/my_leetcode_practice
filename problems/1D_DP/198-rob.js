/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
     // 抽象为：找到给定数组最大不邻的元素的和
     // 递推+需要缓存 =》 动态规划记忆化
     // 情况一：不选自己，那么就选像邻的，比如前面的一个元素：dp(i-1)
     // 情况二：选自己，那么就是自己和前前个元素之和：dp(i-2)+nums[i] ==> i-2，至少两步memo
    const n = nums.length;
    if(n===0) return 0;
    if(n===1) return nums[0];
    const memo = [];
    memo[0] = nums[0]; // 第一个房子的钱
    memo[1] = Math.max(nums[0], nums[1]);  // 第二个房子的钱
    for(let i=2;i<n;i++) { // 前面两步已经有了，从第三家开始
        memo[i] = Math.max(memo[i-1], memo[i-2]+nums[i]);
        console.log(memo);
    }
    
    return memo[n-1]; // 每次迭代时，memo[i]都会根据前两个结果计算出当前的最优解，这样最终memo[n-1]就是考虑所有房子时的最大金额。
/**
memo[0]：只有第1个房子时的最大金额（必须抢它）
memo[1]：前两个房子中的最大金额（抢第一个或第二个中较大的）
memo[i]（i ≥ 2）：考虑前i+1个房子时的最大金额，取以下两种情况中的较大值：
不抢当前房子，那么最大金额等于memo[i-1]
抢当前房子，那么最大金额等于memo[i-2] + nums[i]（因为不能抢相邻的房子）
*/

};