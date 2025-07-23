/**
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。
示例 1：
输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

示例 2：

输入：height = [1,1]
输出：1

 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max_area = 0;
    // 左边线的坐标(left, height(left)); 右边线坐标(right, height(right))
    // 边长 = right - left;
    // 高 = Math.min(height[left], height[right]);
    // 面试 = 边长 * 高
    while(left < right) {
        let area = (right - left) * Math.min(height[left], height[right]);
        max_area = Math.max(area, max_area);
        // 移动短边
        if(height[left] < height[right]){
            left++
        } else {
            right--;
        }
    }
    return max_area;
};

// 测试用例
console.log("Test Case 1:", maxArea([1,8,6,2,5,4,8,3,7])); // 应输出 49
console.log("Test Case 2:", maxArea([1,1]));      // 应输出 1
