# Leetcode Take Note

在 JavaScript 中，map.get(key).push(str) 这行代码通常用于操作 Map 数据结构，它的含义是：
map.get(key) - 从 Map 中获取与指定 key 关联的值
.push(str) - 向这个值（假设是数组）的末尾添加新元素 str
`代码片段`  
```javascript
// 1. 创建一个 Map
const map = new Map();

// 2. 初始化一个键值对，值为空数组
map.set('fruits', []);  // 现在 Map 是: Map(1) { 'fruits' => [] }

// 3. 使用 get().push() 添加元素
map.get('fruits').push('apple');  // Map(1) { 'fruits' => ['apple'] }
map.get('fruits').push('banana'); // Map(1) { 'fruits' => ['apple', 'banana'] }

console.log(map);
// 输出: Map(1) { 'fruits' => [ 'apple', 'banana' ] }
```