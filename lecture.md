```ts
export {};


interface Person {
    name: string;

    age?: number
    // age: number | undefined;
}

const p1: Person = {name: 'mike'}
```

age?과  
age: number | undefined와의 차이

age? 는 생략할 수 잇지만
age: number | undefined 는 age를 입력해 주어쟈 하고 undefined일 수 있다는 표시이다.

---
## 인덱스 타입
```ts
export {

}

// 인덱스 타입
interface Person {
    readonly name: string;
    age: number;
    [key: string]: string| number;
    // 인덱스 타입 값의 타입만 정의
    // 키값이 무자열인것의 value는 모두 string | number
    //그래서 hello '123'이 가능
}

const p1: Person = {
    name: 'mike',
    birthday: '1997-01-01',
    age: '25',
    hello: '123'
}

```

```ts
export {}

interface YearPriceMap {
    [year: number]: number;
    [year: string]: string | number;
}

// number는 string or number에 할당이 가능하기 때문에 타입 에러가 발생하지 않음
interface YearPriceMap2 {
    [year: number]: number;
    [year: string]: string;
}
// number는 string에 할당 가능하지 않기 때문에 에러가 발생


const yearMap: YearPriceMap = {}
yearMap[1998] = 1000;
yearMap[1998] = 'abc';

yearMap['2000'] = 1234;
yearMap['2000'] = 'million'

```

아래와 같이 type과 interface로 함수를 정의 할 수 있다.
```ts
interface GetText {
    (name: string, age: number): string;
}

// type GetText = (name: string, age: number) => string

const getText: GetText = function(name, age) {
    const nameText = name.substr(0, 10);
    const ageText = age >= 35 ? 'senior': 'junior'
    return `name: ${nameText}, age: ${ageText}`
}
```
## 함수의 속성값 지정
```ts
export { };

interface GetText {
    (name: string, age: number): string;
    totalCall?: number
}

const getText: GetText = function (name, age) {
    if (getText.totalCall !== undefined) {
        getText.totalCall += 1;

        console.log(`totalCall: ${getText.totalCall}`);
    }
    return '';
}

getText.totalCall = 0;
getText('', 0);
getText('', 0);
```
위와 같이 totalCall이라는 함수를 설정할 수 있다. 

---
## 클래스 implements
```ts
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

```

---
## 클래스 확장
```ts
export { }

interface Person {
    name: string;
    age: number;
}

interface Korean extends Person {
    isLiveInSeoul: boolean
}
/*
interface Korean {
    name: string;
    age: number;
    isLiveInSeoul: boolean
}
*/
```

---
## 여러 인터페이스 확장
```ts
export { };

interface Person {
    name: string;
    age: number;
}

interface Programmer {
    favoriteProgrammingLanguage: string;
}

interface Korean extends Person, Programmer {
    isLiveInSeoul: boolean
}

class SomePeople implements Korean {
    age: number;
    name: string;
    favoriteProgrammingLanguage: string
    isLiveInSeoul: boolean

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
        this.favoriteProgrammingLanguage = 'lang'
        this.isLiveInSeoul = false
    }

}
```
---
## 교차 타입
```ts
export {};

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
}

type PP = Person & Product;
const pp: PP = {
    name: 'a',
    age: 23,
    price: 1000
}
```
&이 name만 교집합이 되어서 name만 되야 할 것 같지만 3개 name, age, price를 모두 포함해야 에러가 발생하지 않는다.