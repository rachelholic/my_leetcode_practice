/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://www.bilibili.com/video/BV16Y411v7Y6?spm_id_from=333.788.videopod.sections&vd_source=993a3d489c26a842465b78f604a6e1fa
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findTargetSumWays = function(nums, target) {
    const num_sum = nums.reduce((a,b)=> a+b, 0);
    const n = nums.length;
    if(Math.abs(target)> num_sum || (num_sum - Math.abs(target))%2 === 1 ) return 0;
    const neg = (num_sum - Math.abs(target))/2;

    // dp[j] 表示选取若干数字，使其和恰好等于 j 的方案数。
    // j 的取值范围是 0 到 neg（包括 0 和 neg），所以需要 neg + 1 个位置来存储所有可能的情况。
    const dp = new Array(neg + 1).fill(0); 
    dp[0] = 1;
    for(let i=0;i<=n;i++) {
        for(let j=neg;j>=nums[i];j--) { // j是剩余背包容量，num[i]是往外拿的物品，只有当剩余容量j比拿出的物品大的时候才能继续进行
            dp[j] += dp[j-nums[i]];
        }
    }

    return dp[neg];
};

var findTargetSumWays2 = function(nums, target) {
    let nums_sum = nums.reduce((a,b) => a+b, 0);
    const n = nums.length;
    let neg_plus_pos_nums = nums_sum - Math.abs(target);
    if(neg_plus_pos_nums<0 || neg_plus_pos_nums%2 === 1 ) return 0;

    let neg = neg_plus_pos_nums/2;
    // dp[i][j]表示从前i个数字中选取若干个数，使其和为j的方案数
    // i的范围是0到n（共n+1个可能值）
    // j的范围是0到neg（共neg+1个可能值）
    const dp = new Array(n+1).fill().map(() => new Array(neg+1).fill(0));
    dp[0][0] = 1; // 没有任何元素可选，元素和智能为0，那么方案数就只能是1，只有0这一种方案

    for(let i=1;i<=n;i++) {
        const num = nums[i-1]; // 因为i是从1开始的，但是nums第一个元素下标是0，所以减1
        for(let j=0;j<=neg;j++){
            // 对于第i个数字nums[i-1]，有两种选择：
            //    不选它：dp[i][j] = dp[i-1][j]
            //    选它（如果j >= nums[i-1]）：dp[i][j] += dp[i-1][j-nums[i-1]]
            // 最终dp[n][neg]就是使用所有n个数字得到和为neg的方案数，也就是原问题的解。

            // 如果不选这个数，那么当前的和 j 只能由前 i-1 个数组成。
            // 因此，dp[i][j] = dp[i-1][j]（直接继承前 i-1 个数的方案数）。
            dp[i][j] = dp[i-1][j]; // j<num，不选 num

            // 如果选择这个数，那么剩下的和必须是 j - nums[i-1]，由前 i-1 个数组成。
            // 因此，dp[i][j] += dp[i-1][j - nums[i-1]]（加上前 i-1 个数组成 j - nums[i-1] 的方案数）。
            // 前提条件：j >= nums[i-1]，否则无法选择这个数（因为和不能为负数）。
            if(j>=num) { // j就相当于背包的剩余容量，num是物品的大小，j>num说明背包还有空间装物品，选 num （即减去num）
                dp[i][j] += dp[i-1][j-num]
            }
        }

    }
    // dp[n][neg] 表示用所有 n 个数组成 neg 的方案数，即原问题的解。
    return dp[n][neg];
};

// 递归
var findTargetSumWays1 = function(nums, target) {
    // nums是非负数组，但是target可以是负数
    let s = nums.reduce((a, b) => a+b, 0); // 求nums的和
    s -= Math.abs(target); // 所有元素和 减掉 target的绝对值，等于的是添加正负符号的元素相抵消的部份（所以每部份都是s/2），所以一定是偶数，这个s/2作为背包容量
    if (s < 0 || s % 2 == 1) {
        // s不可能小于零（由于 nums[i]≥0，我们无法得到负数）
        // 且为偶数（如果 s 是奇数，由于 nums[i] 都是整数，我们无法得到非整数s/2，方案数是 0）
        // 所以如果是负数或奇数，直接返回0
            return 0;
    }

    const capacity = s/2; // 背包容量
    const n = nums.length;
    // 初始化记忆化数组，用 null 表示未计算
    const memo = Array.from({ length: n }, () => new Array(capacity + 1).fill(null));

    return dfs(n - 1, capacity, nums, memo);
};
/**
 * 记忆化搜索函数
 * @param {number} i 当前处理的数字索引
 * @param {number} c 剩余容量
 * @param {number[]} nums 数字数组
 * @param {Array<Array<number|null>>} memo 记忆化数组
 * @return {number} 方法数
 */
function dfs(i, c, nums, memo) {
    if(i<0){ // i<0此时一个物品都没有了
        // 边界条件：什么时候恰好等于target？也就是当剩余容量c=0的时候，因为我们是从target倒着减的
        // 所以当c=0的时候，我们要返回1，表示找到了一个合法条件
        // 反之如果c不等于0，就表示这是一个不合法方案
        return c === 0 ? 1 : 0;
    }

    if (memo[i][c] !== null) { // 如果已经计算过
        return memo[i][c];
    }
    let ans = dfs(i - 1, c, nums, memo); // 不选
    if (c >= nums[i]) {
        ans += dfs(i - 1, c - nums[i], nums, memo); // 不选 + 选
    }
    memo[i][c] = ans; // 存储计算结果

    return ans;
}