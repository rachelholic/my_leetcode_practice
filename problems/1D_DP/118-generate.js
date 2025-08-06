/**
 * @param {number} numRows
 * @return {number[][]}
 */
 /**
 这五行二维数组为：
 [1]
 [1,1]
 [1,2,1]
 [1,3,3,1]
 [1,4,6,4,1]


特点关系推导递推公式：row:i, col:j
1. 第一个元素和最后一个元素为1： ele[i][0]=ele[i][i]=1;
2. 数组中每个数是它左上方和正上方数之和: ele[i][j]=ele[i-1][j-1]+ele[i-1][j]

这道题难点是边界，

  */
var generate = function(numRows) {
    const ele = Array(numRows);
    for(let i=0;i<numRows;i++) {
        ele[i] = Array(i + 1); // 第i行元素数组！！！！
        ele[i][0]=ele[i][i]=1; // 生成边界的1
        for(let j=1;j<i;j++){ // ！！！！j从第二个开始计算，因为第一个是1，已经赋值了，j<i才能形成三角形二维数组
            ele[i][j]=ele[i-1][j-1]+ele[i-1][j];
        }
    }
    return ele;

};