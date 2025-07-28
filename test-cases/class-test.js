class Person {
    constructor(name) { // 提取student和teacher的共同公共属性“name”
        this.name = name;
    }

    drink() {
        console.log(`${this.name} drinks.`);
    }
}

class Student extends Person { // 继承Person，用extends关键字
    constructor(name, score) {
        // this.name = name;
        super(name); // 用super关键字，传name进去，这样就直接用了父类的构造函数
        this.score = score;
        const secret = "123"; // 私有变量
        // 方法定义在构造函数内部（实例方法）
        // 方法直接绑定到每个实例，每次 new Student() 都会创建一个新的 introduce 函数。
        // 内存占用更高：每个实例都有自己的 introduce 方法副本。
        // 无法被继承：子类无法直接覆盖或调用父类的 introduce 方法。
        // 适用于需要实例独立方法的情况（例如闭包绑定特定数据）。
        this.introduce2 = function() {
            console.log(`I'm ${this.name}, score: ${this.score}, secret: ${secret}`);
        };
    }
    // 方法定义在类内部（原型方法）
    // 方法存储在原型（prototype）上，所有实例共享同一个方法。
    // 内存更高效：无论创建多少个 Student 实例，introduce 方法只存储一次。
    // 支持继承：子类可以覆盖或调用父类的 introduce 方法。
    // 适用于大多数情况，是推荐的做法。

    // 类方法不能用箭头函数定义（语法错误）
    /* ❌ 错误！类方法不能用箭头函数定义
    sayHello = () => {
        console.log("Hello!");
    };
    */
    introduce() {
        console.log(`I'm ${this.name} and get ${this.score}`);
    }
}

const student = new Student('张三', 99);
console.log('student:', student);
student.introduce();
student.drink(); // 调用父方法

const student1 = new Student("张四", 90);
const student2 = new Student("李四", 85);

console.log(student1.introduce === student2.introduce); // true（相同引用）
console.log(student1.hasOwnProperty("introduce")); // false（不在实例上）
console.log(Student.prototype.hasOwnProperty("introduce")); // true（在原型上）


const student3 = new Student("张三", 90);
const student4 = new Student("李四", 85);

console.log(student3.introduce2 === student3.introduce2); // false（不同引用）
console.log(student4.hasOwnProperty("introduce2")); // true（在实例上）
console.log(Student.prototype.hasOwnProperty("introduce2")); // false（不在原型上）

/*
主要区别总结

对比项	   方法定义在类内部（原型方法）	   方法定义在构造函数内（实例方法）
存储位置	Student.prototype	            每个实例单独存储
内存占用	低（共享方法）	                  高（每个实例一个副本）
继承支持	支持（子类可覆盖）	                不支持（无法被继承）
适用场景	推荐大多数情况	                   需要方法独立或闭包绑定时
推荐做法

默认情况下，方法应该定义在类内部（原型方法），因为内存更高效，且支持继承。
只有在特殊需求时（如方法需要访问构造函数局部变量），才使用方法定义在构造函数内部的方式。
额外注意

如果方法需要访问 构造函数内部的变量（闭包），则必须用第二种方式：

javascript
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
        const secret = "123"; // 私有变量
        this.introduce = function() {
            console.log(`I'm ${this.name}, score: ${this.score}, secret: ${secret}`);
        };
    }
}
此时，secret 只能通过构造函数内部的方法访问，外部无法获取。

*/

class Teacher extends Person{
    // 箭头函数不能做构造函数，不是构造函数不能有箭头函数
    constructor(name, subject){
        super(name);
        this.subject = subject;
        // 可以在 constructor 里用箭头函数定义方法
        this.arrorTest = () => {
            console.log('这是一个constructor的箭头函数');
        }
    }

    teach() {
        console.log(`I'm ${this.name}, teach: ${this.subject}`);
    }

    
}

const teacher = new Teacher('Aria', 'FrontEnd');
console.log('teacher', teacher);
teacher.teach();
teacher.arrorTest();



