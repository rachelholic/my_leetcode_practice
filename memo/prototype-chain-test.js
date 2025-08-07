// 原型 (Prototype): 每个JavaScript对象都有一个原型对象
// 原型链 (Prototype chain): 对象通过原型链接形成的链式结构
// __proto__: 对象的隐式原型引用(现已不推荐直接使用)
// prototype: 函数的显式原型属性

function PersonTest(name) {
  this.name = name;
}

PersonTest.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const john = new PersonTest('John');

// 原型链查找过程:
// 1. john 对象本身
// 2. PersonTest.prototype (john.__proto__)
// 3. Object.prototype (PersonTest.prototype.__proto__)
// 4. null (Object.prototype.__proto__)

// 在ES6中，推荐使用 Object.getPrototypeOf() 方法替代直接访问 __proto__。


class Person {
    constructor(name) {
        this.name = name;
    }

    drink() {
        console.log(`${this.name} drinks.`);
    }
}

class Teacher extends Person{
    constructor(name, subject){
        super(name);
        this.subject = subject;
    }

    teach() {
        console.log(`I'm ${this.name}, teach: ${this.subject}`);
    }
}

const teacher = new Teacher('Aria', 'FrontEnd');
console.log('teacher', teacher);
teacher.teach();
teacher.drink();

/**
 * teacher 没有定义drink，但是可以执行，是因为它继承了Person
 * 输入teacher
Teacher {
    name: 'Aria'
    subject: 'FrontEnd'
    __proto__: Person {
        constructor: class Teacher
        teach: f teach()
        __proto__: {
            constructor: class Person
            teach: f drink()
            __proto__: Object
        }
    }
}
看图prototypeChain.png

找属性先从自己找，自己找不到去原型上找，原型找不到去原型的原型找。。。这样就形成了链
 */
teacher.hasOwnProperty('name');  // true
teacher.hasOwnProperty('teach');  // false, 因为不是实例的方法，它是原型上的方法

