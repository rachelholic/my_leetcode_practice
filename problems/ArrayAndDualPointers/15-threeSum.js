/* 给你一个整数数组 nums ，
判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
同时还满足 nums[i] + nums[j] + nums[k] == 0 。
请你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[[0,0,0]]
解释：唯一可能的三元组和为 0 。

 */
/* 
解题思路
1. 给数组排序
2. 遍历数组，从0遍历到length-2（防止越界，因为如果减1，最后start和end就重合了，要么就是end指向最后一个元素的后面，越界了）
3. 如果当前的数字等于前一个数字，则跳过这个数（因为没必要遍历一遍相同的数）==> 这道题最难的点是不能有重复的
4. 如果数字不同，则设置start = i+1, end = length-1，
查看i，start和end，三个数的和比零大还是小，
    a. 如果比0小，start++，
    b. 如果比0大，end--，
    c. 如果等于0，把这三个数加入到结果里
5. 返回结果
https://www.bilibili.com/video/BV15J41167kn/?spm_id_from=333.337.search-card.all.click&vd_source=993a3d489c26a842465b78f604a6e1fa

感悟：排序：首先对数组进行排序，这样我们可以利用有序性来优化搜索过程。
固定一个数：遍历数组，固定一个数 nums[i] 作为三元组的第一个元素。
双指针查找：对于固定的 nums[i]，使用双指针法在剩余数组中寻找两个数 nums[left] 和 nums[right]，使得三者之和为0。
如果和小于0，说明需要更大的数，左指针右移
如果和大于0，说明需要更小的数，右指针左移
如果等于0，记录结果并移动两个指针跳过重复元素
跳过重复元素：在每一步都跳过重复的元素以避免重复的三元组。

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => (a - b));
    for(let i=0;i<nums.length-2;i++){
        // 去重
        // 当i是第一个元素的时候，没必要和前一个比较
        // 当前数和前一个数不相等才能进行循环，否则跳过这个循环，相等的数没必要循环，否则会产生相等的结果
        // 跳过重复的数字
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let start = i+1, // start指针永远是i的下一位
            end = nums.length - 1;
        while(start < end) { // start和end从两边往里面缩，碰面了就结束循环
            const sum = nums[i] + nums[start] + nums[end];
            // 三数之和的三种情况
            if(sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
                // 本题最烧脑的地方
                // 三个地方判断去重：
                // 第一次去重（i 的去重）：判断i和前一个i的值是否相等，保证 nums[i] 不重复。
                // 第二次去重（start 的去重）：保证 nums[left] 不重复。
                // 第三次去重（end 的去重）：保证 nums[right] 不重复。
                while(start < end && nums[start] === nums[start-1]) {
                    start++;
                }
                while(start < end && nums[end] === nums[end+1]) {
                    end--;
                }
            } else if(sum < 0) {
                start++;
            } else { // sum > 0
                end--;
            }

        }
    }
    return result;

};

// 测试用例
console.log("Test Case 1:", threeSum([-1,0,1,2,-1,-4])); // 应输出 [[-1,-1,2],[-1,0,1]]
console.log("Test Case 2:", threeSum([0,1,1]));      // 应输出 []
console.log("Test Case 3:", threeSum([0,0,0]));         // 应输出 [[0,0,0]]