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
 * @param {number} k
 * @return {number}
 */
 // 二叉搜索树如果按照中序遍历“左根右”，就是由大到小遍历，也就是说数到第k个元素就是答案
 // 如果k-1之后值等于0，那么答案就是当前节点的值
var kthSmallest = function(root, k) {
    let ans;
    dfs(root);
    function dfs(node) {
        if(node === null || k === 0){ //  边界条件
            return;
        }
        dfs(node.left); // 左
        if(--k === 0) { // 根
            ans = node.val;
        }
        dfs(node.right); // 右
    }
    return ans;
};