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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let head = null;
    function dfs(node){
        if(!node) {
            return;
        }

        dfs(node.right); // 先处理右子树
        dfs(node.left); // 然后处理左子树
        node.left = null; 
        node.right = head; // 头插法，相当于链表的 node.next = head
        head = node; // 现在链表头节点是 node
    }

    dfs(root);

};