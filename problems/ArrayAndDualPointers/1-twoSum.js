/***
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * LeetCode“两数之和”问题（Two Sum）的常用解法是使用哈希表。核心思想是：遍历数组时，用哈希表记录每个数和它的下标，查找当前数的“目标值-当前数”是否已经出现过。
 */
// 最优解
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0;i<nums.length;i++) {
        let complement = target - nums[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};

/* 常规算法（双指针解法）
即先给数组排序，然后两端两个指针指向的数求和，但是要注意保存数组的索引，因为题目要求返回原始数组索引
这两个数是最大和最小的两个数，如果它两个求和比目标大，说明中间任何一个数和目前指向的最大数求和一定大于目标，所以剔除当前指向的最大数，往前一个移动
如果两个数之和小于目标，那么中间任何一个数加上当前指向的最小数都会小于目标，所以剔除这个当前最小值，往再下一个移动 */
var twoSum2 = function(nums, target) {
    /* 
    保持原始索引，用映射方法map，转为对象数组，example：
    [
        { num: 2, index: 0 },
        { num: 7, index: 1 },
        { num: 11, index: 2 },
        { num: 15, index: 3 }
    ] */
    const indexedNums = nums.map((num, index) => ({num, index}));
    // 按num属性的值升序排列，用sort会返回一个新数组
    indexedNums.sort((a, b) => a.num - b.num);
    let left = 0, // 左边遍历数组的指针
        right = nums.length - 1;  // 右边遍历数组的指针
    while(left < right) {
        const sum = indexedNums[left].num + indexedNums[right].num;
        if(sum === target) {
            // 题目没要求返回索引顺序，否则还要排序：[indexedNums[left].index, indexedNums[right].index].sort((a, b) => a - b);
            return [indexedNums[left].index, indexedNums[right].index];
        } else if(sum > target) { // 需要剔除最大数，右指针左移一位
            right--;
        } else { // 需要剔除最小数，左指针右移动
            left++;
        }
    }
    return []; // 没找到

};

// 测试用例
console.log("Test Case 1:", twoSum([2, 7, 11, 15], 9)); // 应输出 [0, 1]
console.log("Test Case 2:", twoSum([3, 2, 4], 6));      // 应输出 [1, 2]
console.log("Test Case 3:", twoSum([3, 3], 6));         // 应输出 [0, 1]

console.log("Test Case 4:", twoSum2([2, 7, 11, 15], 9)); // 应输出 [0, 1]
console.log("Test Case 5:", twoSum2([3, 2, 4], 6));      // 应输出 [1, 2]
console.log("Test Case 6:", twoSum2([3, 3], 6));         // 应输出 [0, 1]

module.exports = twoSum;

// node problems/twoSum.js