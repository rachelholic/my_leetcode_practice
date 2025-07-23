/**
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 * 
 * 示例 1：
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 * 
 * 示例 2：
 * 输入：s = "cbbd"
 * 输出："bb"
 * 提示：
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 */

/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length < 2){ //  为空或为1
        return true;
    }
    let maxLength = 1; // 不能初始化为0，比如ab的最大回文是1，如果初始化为0，永远也不会更新为1，所以maxLength的初始值是1
    let start = 0;

    function expendAroundCenter(left, right) {
        while(left >=0 && right < s.length && s[left]===s[right]) {
            if(right - left +1 > maxLength) { // 当长度超过当前最大长度，要更新maxLength和start
                // 因为角标是从0开始的，所以长度要+1，比如[a, b, c]角标做减法是0-2=2，但是实际长度是3，需要+1
                maxLength = right - left +1; // 更新最大长度
                start = left; // 记录起始位置
            }
            left--; // 向左扩展
            right++; // 向右扩展
        }
    }

    // 对每个字符 s[i]，同时检查它作为单中心和双中心的情况。
    for(let i=0;i<s.length;i++){ // 回文串的奇偶性无法提前预知，必须对每个字符尝试两种扩展方式
        // s长度为奇数
        expendAroundCenter(i-1,i+1);
        // s长度为偶数
        expendAroundCenter(i,i+1);
    }

    return s.substring(start, start+maxLength);
    
};