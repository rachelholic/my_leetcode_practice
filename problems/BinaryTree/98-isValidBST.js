/**
 * 有效 二叉搜索树定义如下：
节点的左子树只包含 严格小于 当前节点的数。
节点的右子树只包含 严格大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 在验证二叉搜索树（BST）时，初始调用 validate(root, -Infinity, Infinity) 将根节点的允许值范围设为 (-∞, +∞)，这是由 BST的定义 和 递归验证的逻辑 所决定的。
    // 二叉搜索树的定义要求：
    // 任意节点 的值必须 大于其左子树的所有节点值，小于其右子树的所有节点值。
    // 因此，根节点 的值理论上可以是任意值（因为没有父节点限制它），只要它的左右子树满足 BST 条件。
    return validate(root, -Infinity, Infinity);
};

function validate(node, min, max) {
    // 空树是有效的BST
    if (node === null) return true;
    
    // 检查当前节点值是否在(min, max)范围内
    if (node.val <= min || node.val >= max) {
        return false;
    }
    
    // 递归检查左子树和右子树
    // 左子树的所有节点值必须小于当前节点值，所以更新max为node.val
    // 右子树的所有节点值必须大于当前节点值，所以更新min为node.val
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}