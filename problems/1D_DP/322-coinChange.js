/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    // dp[i]:总金额i的时候最优解硬币个数
    // i：当前总金额
    // 我们需要的解为dp[amount]
    // ex: dp[120] = Math.min(dp[119] + 1, dp[118] + 1, dp[115] + 1);
    // 递推公式：dp[i] = Math.min(dp[i - coin] + 1, dp[i - coin] + 1, ...)
    // +1 表示 当前使用的这枚硬币，而 dp[i - coin] 表示 剩余金额所需的最少硬币数。两者相加就是使用当前硬币后的总硬币数。

    const dp = new Array(amount+1).fill(Infinity);
    dp[0]=0;
    for(let coin of coins) { // 先遍历物品，也就是先放了一枚硬币，之后讨论其它放置情况
        for(let i=coin;i<=amount;i++) { // 再遍历背包容量，已经放了这枚coin，从这枚coin当前值开始计算
            // 更新dp[i]为min(当前值, 使用当前硬币后的值+1)
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    // 如果dp[amount]仍然是Infinity，说明无法凑出该金额
    return dp[amount] === Infinity ? -1 : dp[amount];  
};