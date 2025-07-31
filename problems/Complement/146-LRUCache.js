// https://www.bilibili.com/video/BV19b411c7ue/?spm_id_from=333.337.search-card.all.click&vd_source=993a3d489c26a842465b78f604a6e1fa
// 看图146.jpg

/**
 * @param {number} capacity
 */
 // 定义构造函数
var LRUCache = function(capacity) {
    this.limit = capacity;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) {
        return -1;
    } else {
        const temp = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, temp);
        return temp;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.delete(key);
    }
    // 确保重新塞入到cache里，保持第一位
    this.cache.set(key, value);
    if (this.cache.size > this.limit) {
        // 用迭代器next()找到最找插入的元素并且删除
        this.cache.delete(this.cache.keys().next().value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */