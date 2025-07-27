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
        if(mapping.has(s[i])) { // 是否有左括号
            stack.push(mapping.get(s[i]));  // 把对应的有括号给塞进栈
        } else if (stack.length === 0 || stack.pop() !== s[i] ) { // 栈为空或者栈顶元素不匹配当前字符，
        // 这里s[i]是有括号，和栈里的值对比
        // stack.pop() 方法每次调用时都会移除并返回栈顶元素
        // 无论后面的比较结果如何，stack.pop() 都会执行，一定会弹出栈顶元素
            return false;
        }
    }

    return stack.length === 0;

};