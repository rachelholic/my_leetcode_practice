/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ans = [], queue =[];
    queue.push(root);
    if(root === null){
        return ans;
    }
    
    while(queue.length !== 0) {
        const queueLength = queue.length; // 记录每层元素个数
        let currentLevel = [];
        for(let i=0;i< queueLength; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        ans.push(currentLevel);
    }
    return ans;
};