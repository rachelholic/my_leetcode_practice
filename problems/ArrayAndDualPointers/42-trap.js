/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
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
        console.log('sufMaxHeightArray:', sufMaxHeightArray);
    }
    for (let i=0;i<height.length;i++){
        ans += Math.min(preMaxHeightArray[i], sufMaxHeightArray[i]) - height[i];
    }

    return ans;
};