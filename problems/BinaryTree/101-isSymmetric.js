/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 递归一定要有结束条件！！！一定要有条件能返回结果，不能无限递归
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isSame = (left, right) => {
        if(!left || !right) {
            return left === right;
        }
        return left.val === right.val && isSame(left.left, right.right) && isSame(left.right, right.left);
    };
    return isSame(root.left, root.right);
};