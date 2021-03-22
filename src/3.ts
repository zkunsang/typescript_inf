import { isNewExpression } from 'typescript';

export { };

class Person {
    private name: string;

    protected constructor(name: string) {
        this.name = name;
    }

    protected sayHello() {
        console.log(`안녕하세요 저는 ${this.name} 입니다`);
    }
}

class Programmer extends Person {
    constructor(name: string) {
        super(name);

    }

    sayHello() {
        super.sayHello();
        console.log('저는 프로그래머 입니다');
    }
}

class Doctor extends Person {
    constructor(name: string) {
        super(name);
    }

    sayHello() {
        super.sayHello();
        console.log('저는 의사 입니다.')
    }
}

const person = new Person("");
const programmer = new Programmer('jk');
programmer.sayHello();
console.log(programmer.name);