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
 * @return {number[]}
 */
// 中序遍历就是左中右遍历
// 递归法
 /*
var inorderTraversal = function(root) {
    const ans = [];
    const inorder = (node) => {
        if(!node) return;
        inorder(node.left);
        ans.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return ans;
};
*/
// 迭代法
var inorderTraversal = function(root) {
    let curr = root;
    const stack = [];
    const ans = [];
    while(curr || stack.length !==0) {
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }
    return ans;
};
