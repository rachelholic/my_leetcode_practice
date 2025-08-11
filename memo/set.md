# JavaScript Set 详解

Set 是 ES6 (ECMAScript 2015) 引入的一种新的数据结构，它类似于数组，但成员的值都是唯一的，没有重复的值。

## 基本特性

- Set 中的值总是唯一的
- Set 可以存储任何类型的值（原始值和对象引用）
- Set 中的元素是按插入顺序迭代的

## 创建 Set

```javascript
// 创建一个空的 Set
const mySet = new Set();

// 使用数组初始化 Set
const mySet2 = new Set([1, 2, 3, 4, 4, 4]);
console.log(mySet2); // Set {1, 2, 3, 4} - 自动去重
```

## Set 的属性和方法

### 属性

- `Set.prototype.size`：返回 Set 中元素的个数

```javascript
const mySet = new Set([1, 2, 3]);
console.log(mySet.size); // 3
```

### 方法

1. **添加元素** - `add(value)`
   ```javascript
   const mySet = new Set();
   mySet.add(1);
   mySet.add(5).add('some text'); // 可以链式调用
   console.log(mySet); // Set {1, 5, 'some text'}
   ```

2. **删除元素** - `delete(value)`
   ```javascript
   mySet.delete(5); // 删除5
   console.log(mySet); // Set {1, 'some text'}
   ```

3. **检查存在** - `has(value)`
   ```javascript
   console.log(mySet.has(1)); // true
   console.log(mySet.has(5)); // false
   ```

4. **清空 Set** - `clear()`
   ```javascript
   mySet.clear();
   console.log(mySet); // Set {}
   ```

5. **遍历方法**
   - `keys()`：返回键名的遍历器
   - `values()`：返回键值的遍历器
   - `entries()`：返回键值对的遍历器
   - `forEach()`：使用回调函数遍历每个成员

   ```javascript
   const mySet = new Set(['a', 'b', 'c']);
   
   // 由于 Set 没有键名，只有键值，所以 keys() 和 values() 行为一致
   for (let item of mySet.keys()) {
     console.log(item); // 'a', 'b', 'c'
   }
   
   for (let item of mySet.values()) {
     console.log(item); // 'a', 'b', 'c'
   }
   
   for (let [key, value] of mySet.entries()) {
     console.log(key, value); // 'a' 'a', 'b' 'b', 'c' 'c'
   }
   
   mySet.forEach((value) => {
     console.log(value); // 'a', 'b', 'c'
   });
   ```

## Set 的应用场景

1. **数组去重**
   ```javascript
   const arr = [1, 2, 3, 3, 4, 4, 5];
   const uniqueArr = [...new Set(arr)];
   console.log(uniqueArr); // [1, 2, 3, 4, 5]
   ```

2. **存储不重复的值**
   ```javascript
   const uniqueTags = new Set();
   uniqueTags.add('JavaScript');
   uniqueTags.add('HTML');
   uniqueTags.add('CSS');
   uniqueTags.add('JavaScript'); // 不会重复添加
   ```

3. **集合运算**
   ```javascript
   // 并集
   const union = new Set([...setA, ...setB]);
   
   // 交集
   const intersection = new Set([...setA].filter(x => setB.has(x)));
   
   // 差集
   const difference = new Set([...setA].filter(x => !setB.has(x)));
   ```

## WeakSet

WeakSet 是 Set 的变体，与 Set 的区别：

- 只能存储对象引用，不能存储原始值
- 对象是弱引用的，如果没有其他引用，会被垃圾回收
- 不可枚举，没有 size 属性，没有 clear() 方法

```javascript
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
```

## 注意事项

1. Set 判断值是否相等的算法类似于 `===`，但认为 `NaN` 等于 `NaN`
   ```javascript
   const mySet = new Set();
   mySet.add(NaN);
   mySet.add(NaN);
   console.log(mySet.size); // 1
   ```

2. 对象引用是不同的，即使内容相同
   ```javascript
   mySet.add({});
   mySet.add({});
   console.log(mySet.size); // 3 (两个空对象被认为是不同的)
   ```

Set 提供了一种高效的方式来存储唯一值，特别适合需要快速查找和去重的场景。