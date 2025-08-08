/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // dp数组的长度为n+1，dp[i]表示组成数字i所需的最少完全平方数数量。
    // dp[i]表示和为i的完全平方数的最少数量
    // dp[n]表示和为n的完全平方数的最少数量
    const dp = new Array(n+1).fill(Infinity);
    dp[0] = 0;
    // j是平方根,j*j就是物品，i-j*j就表示往外拿出这个物品之后剩余的背包容量
    for(let i=0; i<=n;i++) {
        dp[i] = i; // 最坏的情况就是每次+1（即i个1相加）
        // 尝试所有可能的完全平方数j*j
        for(let j=1; i-j*j >=0; j++){
            // 动态转移方程：取当前值和减去j*j后的值加1的最小值
            // 我们比较当前dp[i]和dp[i - j*j] + 1（加1是因为我们用了j*j这个平方数），取较小值。
            dp[i] = Math.min(dp[i], dp[i-j*j]+1);
        }
    }

    return dp[n];
};