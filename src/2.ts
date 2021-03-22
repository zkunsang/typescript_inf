export { };

class Person {
    sayHello() {
        console.log('안녕하세요');
    }
}

class Programmer extends Person {
    fixBut() {
        console.log('버그 수정 완료')
    }
}

const programmer = new Programmer();
programmer.fixBut();
programmer.sayHello();