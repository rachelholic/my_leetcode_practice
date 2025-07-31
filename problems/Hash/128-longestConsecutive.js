/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    let ans = 0;
    const nums_set = new Set(nums);
    for(const num of nums_set) {
        if(nums_set.has(num-1)) {
            continue;
        }
        let next_num = num + 1;
        while(nums_set.has(next_num)) {
            next_num++;
        }
        ans = Math.max(ans, next_num - num);
    }
    return ans;
};