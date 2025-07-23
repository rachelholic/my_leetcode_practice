/**
 * 
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 示例 2：
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 解题思路
 * 1. 如果数组为空，直接返回空数组。
 * 2. 定义四个边界：上、下、左、右和当前方向
 * 3. 当左边界小于等于右边界且上边界小于等于下边界时，使用 while 循环，按照右、下、左、上的顺序，依次将路径上的元素添加到结果数组中。
 * 4. 更新边界和方向，直到遍历完整个矩阵，返回结果数组。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    let top = 0;
    let bottom = matrix.length - 1; // 行数
    let left = 0;
    let right = matrix[0].length - 1; // 列数
    let direction = 'right';

    let result = [];

    /**
     * [1, 2, 3, 4]
     * [5, 6, 7, 8]
     * [9, 10, 11, 12]
     */

    while(top <= bottom && left <= right) {
        if(direction == 'right') { // 方向为right，就是要从左到右遍历，所以 i=left;i<=right; i递增
            for(let i=left;i<=right;i++){ // 永远从动态左边界循环到右边界
                result.push(matrix[top][i]);  // 在从左到右的遍历中，我们始终处理当前最上层（即 matrix[top] 这一行）。
                // 比如：遍历top=0的时候，方向为right，那就是遍历[1, 2, 3, 4]，这四个数坐标可以看为element[0][1], element[0][2], element[0][3], top是没变的，一直是0
            }
            top++; //  一层从左到右循环完，已经遍历过上面一层，要遍历下一层，top++
            direction = 'down'; // 开始遍历向下的元素
        }
        else if (direction == 'down') { // 方向为down，就是要从上到下遍历，所以 i=top;i<=bottom; i递增
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]); // 在从上到下的遍历中，我们始终处理最有的这一列（即matrix[right]这列）
                // 比如： 遍历4，8，12这列，这仨个数的坐标可以看为element[0][3], element[1][3], element[2][3], right一直没变，一直是3
            }
            right--; // 从上到下一列遍历完，要往左边移动，所以--
            direction = 'left';
        }
        else if (direction == 'left') { // 方向为left，就是从右向左，所以let i = right; i>=left; i递减
            for (let i = right; i>=left; i--) { // 从右往左，数值越来越小，所以是i--
                result.push(matrix[bottom][i]); // 因为遍历的是bottm行，所以bottom的值不变
                // 比如： 遍历[9, 10, 11, 12]这行，这四个数的坐标可以看为element[3][0], element[3][1], element[3][2], element[3][3],bottom一直没变，一直是3
            }
            bottom--; // 这一层结束，往上一层走了，上一层的层数小一，所以是--
            direction = 'top';
        }
        else if(direction == 'top') { // 方向为top，就是从下到上，所以let i=bottom; i>= top; i递减
            for(let i=bottom;i>=top;i--){
                result.push(matrix[i][left]);
            }
            left++;
            direction = 'right';
        }
    }
    return result;
};


// var spiralOrder = function(matrix) {
//     let result = [];

//     while(matrix.length) {
//         let shift = matrix.shift();
//         if (shift) {
//             result = result.concat(shift);
//         }
//         for (var i = 0; i < matrix.length; i++) {
//             if(matrix[i].length) {
//                result.push(matrix[i].pop()); 
//             }
//         }
//         if (matrix.length) {
//             result = result.concat(matrix.pop().reverse());
//         }
//         for (var j = matrix.length -1; j >= 0; j--) {
//             if(matrix[j].length) {
//                 result.push(matrix[j].shift());
//             }
//         }
//     }
//     return result;
// };

// 测试用例
console.log("Test Case 1:", spiralOrder([[1,2,3],[4,5,6],[7,8,9]])); // 应输出 [1,2,3,6,9,8,7,4,5]
console.log("Test Case 2:", spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));      // 应输出 [1,2,3,4,8,12,11,10,9,5,6,7]

module.exports = spiralOrder;