/**
 * DFS（深度优先搜索）解法采用了一种巧妙的"右子树优先"遍历策略，结合深度记录来实现右侧视图的获取。其核心思想是：
优先访问右子树：按照"根节点→右子树→左子树"的顺序遍历
首次到达新深度时记录节点：每个深度层级我们只记录第一个访问到的节点
利用递归栈隐式记录深度：通过递归参数传递当前深度信息
 * 
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let ans = [];

    function dfs(root, depth) {
        if(root === null){ // 递归终止条件
            return;
        }
        // 关键判断：当当前深度等于结果数组长度时，说明是第一次访问该深度
        if(depth === ans.length) {
            ans.push(root.val);
        }
        depth++
        // 优先递归右子树，然后左子树
        dfs(root.right, depth);
        dfs(root.left, depth);
    }
    // 从根节点开始，初始深度为0
    dfs(root, 0);
    return ans;
};