// JavaScript Map 方法详解（包含迭代器）
// Map 是 ES6 引入的一种新的集合类型，用于存储键值对，其中键可以是任何类型的值（对象或原始值）。
// 以下是 Map 的所有方法及其详细说明，包括迭代器相关方法。

// 基本操作方法

// 1. new Map([iterable])
// 构造函数，创建一个新的 Map 对象。
// 创建一个空 Map
const map1 = new Map();
// 从可迭代对象创建 Map
const map2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
]);

// 2. Map.prototype.set(key, value)
const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('a', 3); // 覆盖 'a' 的值

// 3. Map.prototype.get(key)
// 设置 Map 对象中键的值，返回该 Map 对象。
const map3 = new Map([['a', 1], ['b', 1]]);
console.log(map3.get('a')); // 1
console.log(map3.get('c')); // undefined


// 4. Map.prototype.has(key)
// 返回一个布尔值，表示 Map 实例是否包含键对应的值。
const map4 = new Map([['a', 1]]);
console.log(map4.has('a')); // true
console.log(map4.has('b'));  // false


// 5. Map.prototype.delete(key)
// 删除 Map 中与键对应的元素，返回 true；如果该元素不存在则返回 false。
const map5 = new Map([['a', 1]]);
console.log(map5.delete('a')); // true
console.log(map5.delete('a')); // false

// 6. Map.prototype.clear()
// 移除 Map 对象中的所有元素。
const map6 = new Map([['a', 1], ['b', 2]]);
map6.clear();
console.log(map6.size);  // 0

// 属性
// 7. Map.prototype.size
// 返回 Map 对象中的键值对数量。
const map7 =  new Map([['a', 1], ['b', 2]]);
console.log(map7.size);  // 2


// 迭代器方法
// Map 提供了多种迭代方法，返回的都是迭代器对象，可以使用 for...of 循环遍历。
// 8. Map.prototype.keys()
// 返回一个新的迭代器对象，包含按插入顺序排列的每个元素的键

const map8 = new Map([
    ['a', 1],
    ['b', 2]
]);
for(const key of map8.keys()) {
    console.log(key); // 'a', 'b'
}


// 9. Map.prototype.values()
// 返回一个新的迭代器对象，包含按插入顺序排列的每个元素的值。
const map9 = new Map([['a', 1], ['b', 2]]);
for(const value of map9.values()){
    console.log(value); // 1, 2
}

// 10. Map.prototype.entries()
// 返回一个新的迭代器对象，包含按插入顺序排列的每个元素的 [key, value] 对。这是默认的迭代器方法。
const map10 = new Map([['a', 1], ['b', 2]]);
for(const [key, value] of map10.entries()) {
    console.log(key, value);  // 'a' 1, 'b' 2
}
// 简写形式（因为 entries() 是默认迭代器）
for(const [key, value] of map10){
    console.log(key, value); // 'a' 1, 'b' 2
}

// 11. Map.prototype[@@iterator]()
// @@iterator 方法，与 entries() 方法相同，返回 Map 的默认迭代器。
const map11 = new Map([['a', 1]]);
const iterator = map11[Symbol.iterator]();

console.log(iterator.next().value); // ['a', 1]
console.log(iterator.next().done); // true

// 遍历方法
// 12. Map.prototype.forEach(callbackFn[, thisArg])
// 按插入顺序对 Map 中的每个键值对执行一次提供的函数。
const map12 = new Map([
    ['a', 1],
    ['b', 2]
]);
map12.forEach((value, key, map12) => {
    console.log(key, value); // 'a' 1, 'b' 2
});

// 与其他数据结构的转换
// 从 Map 到数组
const map13 = new Map([['a', 1], ['b', 2]]);
// 使用扩展运算符
const arr1 = [...map13];
// 使用 Array.from
const arr2 = Array.from(map);  // [['a', 1], ['b', 2]]

// 从数组到 Map
const arr = [['a', 1], ['b', 2]];
const map14 = new Map(arr);

// 使用对象作为键
// Map 的一个关键特性是可以使用对象作为键：
const objKey = {id: 1};
const map15 = new Map();
map.set(objKey, 'value associated with object');
console.log(map.get(objKey)); // 'value associated with object'

// 注意事项

// Map 的键比较是基于 "SameValueZero" 算法（类似于严格相等 ===，但认为 NaN 等于 NaN）
// 与 Object 不同，Map 会维护键值对的插入顺序
// Map 的性能在频繁增删键值对的场景下通常比 Object 更好
// 这些方法使得 Map 成为处理键值对集合的强大工具，特别是在需要复杂键或需要维护插入顺序的场景下。


// 深入详解 Map.prototype[@@iterator]() 方法
// Map.prototype[@@iterator]() 是 JavaScript Map 对象的一个内置方法，它返回 Map 的默认迭代器。这个方法对于理解 Map 的迭代行为非常重要。
// 基本概念

// 1. @@iterator 符号

// @@iterator 是 Symbol.iterator 的简写形式
// 它是一个内置的 Symbol 值，用于定义对象的默认迭代器
// 任何实现了 @@iterator 方法的对象都是可迭代的

// 2. 方法定义
// Map.prototype[Symbol.iterator]()
// 方法行为

// 1. 返回值

// 返回一个新的迭代器对象
// 该迭代器对象遵循迭代器协议（即具有 next() 方法）
// 每次调用 next() 返回一个包含 value 和 done 属性的对象
// 2. 迭代顺序

// 按照 Map 中键值对的插入顺序进行迭代
// 每次迭代返回一个 [key, value] 形式的数组
// 使用方法
// 1. 直接调用
const map16 = new Map([
  ['a', 1],
  ['b', 2]
]);

// 获取迭代器
const iterator1 = map16[Symbol.iterator]();

// 手动迭代
console.log(iterator1.next()); // { value: ['a', 1], done: false }
console.log(iterator1.next()); // { value: ['b', 2], done: false }
console.log(iterator1.next()); // { value: undefined, done: true }


// 2. 在 for...of 循环中使用
// 由于 @@iterator 是 Map 的默认迭代器，for...of 循环会自动调用它：
const map17 = new Map([
  ['a', 1],
  ['b', 2]
]);

for (const [key, value] of map17) { // 隐式调用 map[Symbol.iterator]()
  console.log(key, value);
}
// 输出:
// 'a' 1
// 'b' 2


// 3. 与 entries() 方法的关系
// Map.prototype[@@iterator]() 实际上等同于 Map.prototype.entries() 方法：
const map18 = new Map();
console.log(map[Symbol.iterator] === map.entries); // true

// 技术细节
// 1. 迭代器协议
// 返回的迭代器对象必须实现以下接口：
/* 
interface Iterator<T> {
  next(): IteratorResult<T>;
}

interface IteratorResult<T> {
  value: T;
  done: boolean;
} 
*/

// 2. 可迭代协议
// Map 实现了可迭代协议，因为它有 @@iterator 方法：
const map19 = new Map();
console.log(typeof map19[Symbol.iterator]); // "function"

// 实际应用
// 1. 解构赋值
const map20 = new Map([['a', 1], ['b', 2]]);
const [firstEntry, ...rest] = map20;
console.log(firstEntry); // ['a', 1]
console.log(rest); // [['b', 2]]

// 2. 转换为数组
const map21 = new Map([['a', 1], ['b', 2]]);
const arr3 = [...map21]; // 使用扩展运算符调用 @@iterator
console.log(arr3); // [['a', 1], ['b', 2]]

// 3. 自定义迭代行为
// 虽然通常不需要，但你可以覆盖默认的迭代器：
class SpecialMap extends Map {
  [Symbol.iterator]() {
    const entries = [...this.entries()].reverse();
    return entries[Symbol.iterator]();
  }
}

const smap = new SpecialMap([['a', 1], ['b', 2]]);
console.log([...smap]); // [['b', 2], ['a', 1]] (反向迭代)

// 注意事项
// 不可重用性：迭代器是一次性对象，遍历完后需要重新获取

/*
与其他迭代方法对比

方法	            返回值形式	        是否默认迭代器
[@@iterator]()	 [key, value]	            是
entries()	     [key, value]	    等同于 @@iterator
keys()	             key	                否
values()	        value	                否
*/

// 总结

// Map.prototype[@@iterator]() 方法是 Map 对象实现可迭代协议的关键，它：

// 返回一个按插入顺序迭代 [key, value] 对的迭代器
// 是 entries() 方法的别名
// 使得 Map 可以直接用于 for...of、扩展运算符等需要可迭代对象的场景
// 为 Map 提供了与其他 ES6 特性（如解构赋值）无缝集成的能力
// 理解这个方法对于掌握 Map 的迭代行为和 JavaScript 的迭代协议非常重要。


