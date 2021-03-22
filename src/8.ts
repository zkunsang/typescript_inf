export { };

class Person {

    constructor(public name: string, public age: number) {

    }
}

const person = new Person('홍길동', 23);
console.log(person.name, person.age);