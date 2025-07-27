/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return 0;
    }
    // s = "abcabcbb"
    let maxLength = 0;
    const set = new Set();
    let j = 0;
    for(let i=0;i<s.length;i++){
        if(!set.has(s[i])){
            set.add(s[i]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            while(set.has(s[i])) {
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);  // while里面把这个元素删了就没有这个元素了，别忘了给加回去
        }
    }
    return maxLength;
};