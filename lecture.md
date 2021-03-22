## class constructor에 protected가 붙으면
protected가 붙게 되면 직접 생성자를 호출 할 수 없고 상속 받은 다른 클래스에서 사용할 수 있다.

---

## Read only keyword
read only키워드가 붙게 되면 생성자에서만 적용시킬 수 있다.

---
## person
```ts
export { };

class Person {

    constructor(public name: string, public age: number) {

    }
}

const person = new Person('홍길동', 23);
console.log(person.name, person.age);
```
constructor에 public을 붙이게 되면 자동으로 멤버 변수를 생성하게 된다.

---
## getter setter
```ts
export { };

class Person {
    private _name: string = '';

    get name(): string {
        console.log('getter called');
        return this._name;
    }

    set name(newName: string) {
        if (newName.length > 10) {
            throw new Error('최대 길이를 넘었습니다');
        }
        this._name = newName;
    }
}

let person = new Person();
person.name = '홍기롱';
console.log(person.name);
person.name = 'asdklfjlasdjfalksdjflkasdfj'
```