/* 
49. 字母异位词分组
中等


给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

解释：

在 strs 中没有字符串可以通过重新排列来形成 "bat"。
字符串 "nat" 和 "tan" 是字母异位词，因为它们可以重新排列以形成彼此。
字符串 "ate" ，"eat" 和 "tea" 是字母异位词，因为它们可以重新排列以形成彼此。
示例 2:

输入: strs = [""]

输出: [[""]]

示例 3:

输入: strs = ["a"]

输出: [["a"]]

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for(const str of strs){
        // 'eat' => 'aet'
        const key = str.split('').sort().join('');
        if(!map.has(key)){
            map.set(key, []); // Map {"aet" => []} 
        }
        map.get(key).push(str);  // Map {"aet" => ["eat"]};
    }
    return Array.from(map.values());
};

// 测试用例
console.log("Test Case 1:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // 应输出 [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log("Test Case 2:", groupAnagrams([""]));      // 应输出 [[""]]
console.log("Test Case 3:", groupAnagrams(["a"]));         // 应输出 [["a"]]

module.exports = groupAnagrams;