/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param head ListNode类 
 * @return ListNode类
 */
function ReverseList( head ) {
    // write code here
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next; // 为了方便curr找到下一个节点，单向列表不能自己向前挪，需要next先指向下一个节点占位，
        curr.next = prev; // 因为反转，curr.next永远指向prev
        prev = curr; // 挪curr之前挪动prev，因为prev知道curr的位置，先挪了curr，prev就找不到curr挪之前的位置了
        curr = next;
    }
    return prev;
}
module.exports = {
    ReverseList : ReverseList
};

// 反转链表算法解释
// 这段代码实现了链表的反转操作。让我们逐步解析这个ReverseList函数：

// 算法思路

// 该算法使用迭代方法来反转单链表，通过改变每个节点的next指针方向来实现反转。

// 变量说明

// head: 原始链表的头节点
// curr: 当前正在处理的节点（初始化为head）
// prev: 当前节点的前一个节点（初始化为null）
// next: 临时存储当前节点的下一个节点
// 执行步骤

// 初始化curr为head，prev为null
// 进入循环，只要curr不为null就继续：
// a. 保存curr.next到next（防止丢失后续节点）
// b. 将curr.next指向prev（反转指针方向）
// c. prev移动到curr位置（前驱节点前进）
// d. curr移动到next位置（当前节点前进）
// 当curr为null时，循环结束，此时prev就是新链表的头节点
// 返回prev
// 示例

// 假设原始链表：1 → 2 → 3 → null

// 执行过程：

// 第一次循环：反转1，变成 null ← 1
// 第二次循环：反转2，变成 null ← 1 ← 2
// 第三次循环：反转3，变成 null ← 1 ← 2 ← 3
// 最终返回的新头节点是3
// 复杂度分析

// 时间复杂度：O(n)，只需遍历链表一次
// 空间复杂度：O(1)，只使用了固定数量的指针变量
// 这个算法是反转链表的高效实现，也是面试中常见的经典问题。