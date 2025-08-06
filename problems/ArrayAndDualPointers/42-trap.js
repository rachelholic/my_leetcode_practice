/**
 * @param {number[]} height
 * @return {number}
 */
 // 前后缀分解: 从左往右找前缀最大值数组，从右往左找后缀最大值数组，每个位置最小值和和高度做差，找到雨水
var trap1 = function(height) {
    const h = height.length;
    let ans = 0;
    const preMaxHeightArray = [height[0]];

    // get prefix max height
    for (let i=1; i<h;i++) {
        preMaxHeightArray.push(Math.max(height[i], preMaxHeightArray[i-1]));
        // console.log('preMaxHeightArray:', preMaxHeightArray);
    }
    const sufMaxHeightArray = Array(9);
    sufMaxHeightArray[h-1]=height[h-1];
    // get suffix max height
    for (let i=h-2;i>=0;i--) {
        sufMaxHeightArray[i] = (Math.max(sufMaxHeightArray[i+1], height[i]));
    }
    for (let i=0;i<height.length;i++){
        ans += Math.min(preMaxHeightArray[i], sufMaxHeightArray[i]) - height[i];
    }

    return ans;
};


// 相向双指针：
/**
核心思路
preMax：记录从左到右遍历时的最大值（即 [0...left] 的最大值）。
sufMax：记录从右到左遍历时的最大值（即 [right...n-1] 的最大值）。
比较 preMax 和 sufMax：
如果 preMax < sufMax，说明 左边最大值较小，当前 left 位置的水量由 preMax 决定（因为右边至少有一个 sufMax 可以挡住水）。
否则，说明 右边最大值较小，当前 right 位置的水量由 sufMax 决定。
关键性质：对于任意一个柱子 i，它能接的雨水量由 min(左边最大值, 右边最大值) - height[i] 决定。
 */

var trap2 = function(height) {
    let left = 0, right = height.length -1; // 左右指针
    let preMax = 0, sufMax = 0; // 前缀最大值和后缀最大值
    let ans = 0;
    while(left < right) { // 左右指针没错过
        preMax = Math.max(preMax, height[left]);
        sufMax = Math.max(sufMax, height[right]);
        // 如果 preMax < sufMax，说明 左边最大值较小，当前 left 位置的水量由 preMax 决定（因为右边至少有一个 sufMax 可以挡住水）。
        if(preMax < sufMax){
            ans += preMax - height[left];
            left++;
        } else {
            ans += sufMax - height[right];
            right--;
        }
    }

    return ans;
};
