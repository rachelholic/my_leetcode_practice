class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    introduce() {
        console.log(`我是${this.name}, 考了${this.score}`);
    }
}

const student = new Student('张三', 99);
console.log('student', student);
student.introduce();

/*
直接在控制台输入student，只会返回:
Student {
    name: '张三',
    score: 99,
    __proto__: Object
}
并没看到introduce这个方法？其实这个方法在__proto__里面
展开__proto__会看到
__proto__: {
    constructor: class Student
    introduce: f introduceI()
    __proto__: Object
}
这个Student上的__proto__属性就叫做它的“隐式原型”
当我们去找一个对象上属性和方法的时候，如果在当前对象找不到，就要去它的隐式原型上找。

如果我们输入student.__proto__，会发现它返回的也是个对象：
{
    constructor: class Student
    introduce: f introduceI()
    __proto__: Object
}

如果我们在控制台输入Student这个类名，它会显示这个class，如果输入Student.prototype，会返回
{
    constructor: class Student
    introduce: f introduceI()
    __proto__: Object
}
如果输入student.__proto__, 会返回：
{
    constructor: class Student
    introduce: f introduceI()
    __proto__: Object
}
发现它们长的一样
那么我们输入
Student.prototype === student.__proto__
会发现返回true
就证明这两个东西其实指向的是同一个对象（看图prototype.png）

Student.prototype === student.__proto__
    显式原型                隐式原型
隐式原型会指向构建出这个实例的类的显式原型
*/