## 타입 호환성
타입 스크립트는 값 자체의 타입 보다는 값이 가진 내부 구조에 기반하여 호환성을 체크한다.  
이를 structural typing이라고 부름

```ts
export { };

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    age: number;
}

const person: Person = { name: 'mike', age: 23 };
const product: Product = person;
```
타입 이름이 다르나 내부 구조가 같아 할당이 가능함
다른 정적 언어는 안되지만 structural typing이여서 가능

---
## 
```ts
export {};

interface Person {
    name: string;
}

interface Product {
    name: string;
    age: number;
}

const obj = { name: 'mike', age: '23', city: 'abc' }

let person: Person = obj;
let product: Product = obj;

// 속성이 많아질수록 더 많은 제약이 생기는것( Person 보다는 Product가 제약이 더 많음)
```