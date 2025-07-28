// hasOwnProperty 是 JavaScript 中 Object 原型的一个方法，用于检查对象自身是否具有指定的属性（不包括原型链上的属性）。

// 1. 检查对象自身属性（非继承属性）
const obj = { a:1 }; 
console.log(obj.hasOwnProperty('a')); // true，自身属性
console.log(obj.hasOwnProperty('toString')); // false, 来自原型链

// 2. 遍历对象自身属性
for(let key in obj) {
    if(obj.hasOwnProperty(key)){
        console.log('key:', key); // 只输出对象自身的属性: a
    }
}

// 3. 避免于原型属性发生冲突
// // 防止意外覆盖原型方法
if(!obj.hasOwnProperty('toString')) {
    obj.toString = function() { /* 自定义实现 */ };
}


// 4. 安全的坚持属性存在性
// 即使对象有自定义的 hasOwnProperty 方法也能安全使用
Object.prototype.hasOwnProperty.call(obj, 'property');

/**
注意事项
hasOwnProperty 只检查对象自身的属性，不检查原型链
如果对象重写了 hasOwnProperty 方法，可以使用 Object.prototype.hasOwnProperty.call(obj, prop)
ES6 的 Object.keys() 和 Object.getOwnPropertyNames() 已经返回对象自身的属性，有时可以替代 hasOwnProperty
*/

// 与 in 操作符的区别
const obj2 = {a:1}
console.log('a' in obj2); // true (检查原型链)
console.log('toString' in obj2); // true (来自原型链)
console.log(obj2.hasOwnProperty('toString')); // false，只检查自身

