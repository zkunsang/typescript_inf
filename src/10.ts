export { };

interface Person {
    name: string;
    age: number;
    isYoungerThan(age: number): boolean;
}

class SomePerson implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }

    isYoungerThan(age: number) {
        return this.age < age
    }
}