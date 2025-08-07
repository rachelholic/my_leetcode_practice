/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * https://www.bilibili.com/video/BV16Y411v7Y6?spm_id_from=333.788.videopod.sections&vd_source=993a3d489c26a842465b78f604a6e1fa
 */
var findTargetSumWays = function(nums, target) {
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


// 494
// p：正数1的个数
// s：所有元素个数
// s-p：所有负数1的个数
// target就是：p-(s-p)=t
// 式子化简：2p=s+t
// 所以 p=(s+t)/2
// 问题转化为：从nums选一些数字，使得它们的和恰好等于(s+t)/2的方案数
// p是整数，还等于(s+t)/2，那么p一定是一个偶数
// nums[i]是非负数，所以你无论怎么选都无法得到负数
// 那么s+t是不能为负数的


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays2 = function(nums, target) {
    let sum = nums.reduce((prev, cur) => prev + cur);

    // 要求到的 target 不能求到
    // 1、要求到的目标值的绝对值超过了所有数的和
    // 2、sum + target 是奇数
    if(Math.abs(target) > sum || (sum + target) % 2 == 1) return 0

    
    let tempTarget = (sum + target) / 2

    let dp = new Array(tempTarget + 1).fill(0);
    dp[0] = 1;
    for(let i = 0; i < nums.length; i++) {
        for(let j = tempTarget; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }

    return dp[tempTarget]
};
