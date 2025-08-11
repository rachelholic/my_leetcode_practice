/**
 * 算法
 * 1. 遍历二叉树，在计算最长链的同时，顺带把直径算出来
 * 2. 在当前节点“拐弯”的直径长度 = 左子树的最长链 + 右子树的最长链 + 2
 * 3. 返回给父节点的是以当前节点为根的子树的最长链 = max(左子树最长链， 右子树最长链) + 1
 * 
直径的定义
直径不是简单的「左右子树深度之和」，而是遍历树中每个节点时，都计算一次 左子树深度 + 右子树深度，取最大值。
因为最长路径可能不经过根节点，所以不能只看一次。
 */

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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    
    let maxLength = 0;
    function dfs(root) {
        if(root === null) {
            return 0;
        }
        const leftLength = dfs(root.left);
        const rightLength = dfs(root.right);

        maxLength =  Math.max(maxLength, leftLength+rightLength);

        return Math.max(leftLength, rightLength) + 1; 
    }

    dfs(root);
    return maxLength;

};