/**
 * @param {string} s
 * @return {boolean}
 */
 // s = "()[]{}"
var isValid = function(s) {
    if(s.length % 2 !== 0){
        return false;
    }

    const mapping = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
    ]);

    const stack = [];

    for(let i=0;i<s.length;i++) {
        if(mapping.has(s[i])) {
            stack.push(mapping.get(s[i]));
        } else if (stack.length === 0 || stack.pop() !== s[i] ) { // 栈为空或者栈顶元素不匹配当前字符
            return false;
        }
    }

    return stack.length === 0;

};