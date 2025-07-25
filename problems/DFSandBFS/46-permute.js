/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const path = [];
    const answer = [];
    backtracking(nums, []);

    function backtracking(nums, usedFlagArray) {
        if(path.length === nums.length){
            // answer.push(path);
            // 直接 push 的是 path 数组的 引用
            // 后续对 path 的任何修改（比如 path.pop()）都会影响已经存入 answer 的数组
            // 最终 answer 中所有元素都会指向同一个 path 的最终状态（通常是空数组）

            // answer.push(Array.from(path)); 
            // answer.push(path.slice()); // slice 复制
            answer.push([...path]);  // [...path] 展开运算符
            // 创建 path 的 新副本 再存入 answer
            // 后续对 path 的修改不会影响已存入的数组
            // 每个排列结果会被独立保存
            // 以上三种方式都能copy path的副本

            return;
        }
        for(let i=0; i<nums.length;i++){
            if(usedFlagArray[i]) continue;
            usedFlagArray[i] = true;
            path.push(nums[i]);
            backtracking(nums, usedFlagArray);
            usedFlagArray[i] = false;
            path.pop();

        }
    }
    

    return answer;

};