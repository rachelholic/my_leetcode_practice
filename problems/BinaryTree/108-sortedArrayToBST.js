/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 // 高度平衡的二叉树是指每个节点的两个子树的深度差不超过1的二叉树。
 // 二叉搜索树性质：对于树中的每个节点，其左子树的所有节点值都小于它，右子树的所有节点值都大于它。
 // 平衡要求：为了保持平衡，我们需要尽可能让左右子树的节点数量相近。
 /**
由于给定的数组已经是排序好的，我们可以利用二分查找的思想来构建平衡BST：
1. 每次选择数组中间的元素作为根节点
2. 左边的子数组构建左子树
3. 右边的子数组构建右子树
4. 递归地进行这个过程
*/
var sortedArrayToBST = function(nums) {

    return helper(0, nums.length-1);
    
    function helper(leftIndex, rightIndex){
        if(leftIndex > rightIndex){
            return null; // 递归边界条件，如果left>right就返回空节点
        }
        // 总是选择中间位置左边的数字作为根节点
        const mid = Math.floor((leftIndex + rightIndex)/2); // !!!!!
        const root = new TreeNode(nums[mid], helper(leftIndex, mid-1), helper(mid+1, rightIndex));

        return root;

    }
};